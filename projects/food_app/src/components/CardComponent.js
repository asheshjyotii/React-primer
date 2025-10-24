import { RATING_ICON, RES_THUMBNAIL } from "../utils/constants";

const CardComponent = (props) => {
    // let res_name = props['res_data'].info.name;
    const { resData } = props;
    const { name,avgRating,sla,cuisines,areaName,cloudinaryImageId } = resData?.info
    return(

      <div className="card-structure">
          <div className="card-contents">
              <div className="restaurant-img-container">
              <img className="restaurant-img" src={`${RES_THUMBNAIL}${cloudinaryImageId}`} />
              </div>
              
              
              <div className="restaurant-details">
                  <div className="restaurant-name">
                      <span >
                            {name}
                      </span>
                  </div>
                  <div className="restaurant-other-details">
                      <img src={RATING_ICON} className="rating-icon"/>
                      <span className="restaurant-rating-text">
                          {avgRating}
                      </span>
                      <span className="restaurant-details-divider">
                          |
                      </span>
                      <span className="restaurant-delivery-time">
                      {sla.slaString}
                      </span>
                  </div>
              </div>
              <div className="restaurant-offerings">
                  <span>{cuisines.join(",")}</span>
                  <br></br>
                  <span>{areaName}</span>
              </div>
          </div>
      </div>

);}

export default CardComponent;