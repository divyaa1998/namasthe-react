import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {loggedInUser} = useContext(UserContext);
    const {cloudinaryImageId,name,cuisines,avgRatingString,avgRating,sla} = resData.info;
    return (
      <div
        className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
      
      >
        <img
          className="rounded-lg"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.slaString}</h4>
        <h5>User: {loggedInUser}</h5>
      </div>
    );
  };

  export const withPromotedLabel = (RestaurantCard) => {
      return (props) => {
          return <div>
              <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
              <RestaurantCard {...props}/>
          </div>
      }
  }
  export default RestaurantCard;