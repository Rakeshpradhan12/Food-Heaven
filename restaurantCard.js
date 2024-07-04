
import { IMG_CDN_URL } from "../config";

const RestaurantCard=({name,cloudinaryImageId,areaName,locality,avgRating})=>{
    return(
        <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId}/>
        <h2>{name}</h2>
        <h3>{areaName}</h3>
        <h3>{locality}</h3>
        <h4>{avgRating} stars</h4>
        </div>
    )
}

export default RestaurantCard;