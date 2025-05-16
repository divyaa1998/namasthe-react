import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchTxt,setSearchTxt] = useState("");
  const [filteredList,setFilteredList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await data.json();
    setRestaurantList(
      jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList( jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants)
  };
console.log("Body Rendered")
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-input" value={searchTxt} onChange={(e) => {
                setSearchTxt(e.target.value);
            }}/>
            <button onClick={() => {
               const filteredList = restaurantList.filter((data) => data.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
               setFilteredList(filteredList);
            }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4.3
            );

            setFilteredList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
