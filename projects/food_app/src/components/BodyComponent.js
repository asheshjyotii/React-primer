import CardComponent from "./CardComponent";
import resArray from "../utils/mock"

const BodyComponent = () => {
    return(
  <div className="body">
      
      <div className="card-space">
          
              <div className="restaurant-card-container">
                {resArray.map((restaurant) => (
                      <CardComponent key={restaurant.info.id} resData= {restaurant} />
                ))}
                  
                  
              </div>
          
      </div>
  </div>
);}

export default BodyComponent;