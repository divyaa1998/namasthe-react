import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
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
   console.log(jsondata);
   console.log(jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants)
    setRestaurantList(
      jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
   
    setFilteredList( jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants)
  };
const onlineStatus = useOnlineStatus();
 console.log(onlineStatus)
 if(onlineStatus === false)  return <h1>Looks you are offline!! Please check your internet connection</h1>
 
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4">
            <input type="text" className="border border-solid border-black" value={searchTxt} onChange={(e) => {
                setSearchTxt(e.target.value);
            }}/>
            <button className="bg-green-100 px-4 py-2 m-4 rounded-lg" onClick={() => {
               const filteredList = restaurantList.filter((data) => data.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
               setFilteredList(filteredList);
            }}>Search</button>
        </div>
        <div className="search p-4 m-4 flex items-center">
 <button
          className="px-4 py-2 bg-gray-100"
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
       
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((restaurant) => (
         <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id} ><RestaurantCard  resData={restaurant} /></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
