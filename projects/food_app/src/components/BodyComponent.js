import CardComponent from "./CardComponent";
import resArray from "../utils/mock";
import {useState} from "react";




const BodyComponent = () => {
  let [RestaurantsList, setRestaurantsList] = useState(resArray)
    return(
  <div className="body">
      <button className="filter-button"
      onClick = {
        ()=> {
          setRestaurantsList(RestaurantsList.filter((res)=> res.info.avgRating>4.4))
           
        }
      }
      >
        Favourites
      </button>
      <div className="card-space">
          
              <div className="restaurant-card-container">
                {RestaurantsList.map((restaurant) => (
                      <CardComponent key={restaurant.info.id} resData= {restaurant} />
                ))}
                  
                  
              </div>
          
      </div>
  </div>
);}

export default BodyComponent;