import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Simmer from "./simmerUI";
import { Link } from "react-router-dom";
function filterData(searchText, allRestaurant) {
  return allRestaurant.filter((item) => item?.info?.name?.toUpperCase()?.includes(searchText?.toUpperCase()));
}

const Body = () => {
  //in js we use const text="kfc"; similarly in react below for variables that changes we use

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [allRestaurant, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();
  // const[restaurant,setRestaurant]=useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      //optional chaining
      setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    catch (e) {
      document.write("failed to get the data");
    };
  }
  //avoid rendering
  //early return
  if (!allRestaurant) return null;
  return allRestaurant?.length === 0 ?
    <Simmer />
    : (
      <>
        <div className="search-container">
          <input
            type="text"
            placeholder="search"
            className="search-input"
            value={searchText}
            onChange={(e) =>
              setSearchText(e.target.value)
            }
          />
          <button className="search-btn"
            onClick={() => {
              const data = filterData(searchText, allRestaurant);
              setFilteredRestaurant(data);

            }
            }>
            Search</button>
        </div>

        {/* {conditional rendering} */}
        <div className="restaurantList" >
          {filteredRestaurant.length === 0 ?
            <h1 style={{ color: "red" }}>no results found match the restaurant</h1>
            : filteredRestaurant.map((data) => {
              return (
                <Link to={"/restaurant/"+data.info.id} key={data.info.id}style={{textDecoration : "none"}}>
                <RestaurantCard {...data.info}/>
                </Link>
              )
            })
          }

        </div>
      </>
    )
}

export default Body;