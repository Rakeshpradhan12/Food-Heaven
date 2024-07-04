import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "../config"
import Simmer from "./simmerUI";


const RestaurantMenu = () => {
    //how to read a dynamic URL params
    const { id } = useParams();
    const [restaurant,setRestaurant]=useState(null);
    const[restaurantDetails,setRestaurantDetails]=useState(null);
    const [itemCards,setItemCards]=useState([]);
    useEffect(() => {
        getMenu();
    }, []);
    async function getMenu(){
        try{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setRestaurant(json?.data);
        setRestaurantDetails(json.data.cards[2]?.card?.card?.info);
        setItemCards(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        }
        catch(e){
            console.log(e);
        }
       
    }
     
    return (!restaurantDetails) ? <Simmer/> : (
        
         <div className="menu">
           <div style={{marginRight : "60px "}}>
            <h1 style ={{color: " orange"}}>Restaurant id:{id}</h1>
             <h2 style={{color : "green"}}>{restaurant?.cards[0]?.card?.card?.text}</h2>
             <img src={IMG_CDN_URL + restaurantDetails?.cloudinaryImageId} style={{width : "300px"}}/>
             <h3> {restaurantDetails?.areaName}</h3>
             <h3> {restaurantDetails?.city}</h3>
             <h3> {restaurantDetails?.cuisines}</h3>
             <h3> {restaurantDetails?.costForTwoMessage}</h3>
             <h3> {restaurantDetails?.avgRating + " stars"}</h3>  
             </div>
             <div>
                <h1 style={{color:"red"}}>Menu List</h1>
                <ul>
                {itemCards.map((e) => 
                    <li key={e?.card?.info?.id}>{e?.card?.info?.name+"  :  "+e?.card?.info?.price+" paisa"}</li>       
                )}
                </ul>
            </div>      
        </div>
    )
}
export default RestaurantMenu;