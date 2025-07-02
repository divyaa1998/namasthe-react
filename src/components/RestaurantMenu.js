import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [ShowIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} . {costForTwoMessage}
      </p>
      {categories.map((category,index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={ShowIndex === index? true : false }
          setShowIndex = {() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
