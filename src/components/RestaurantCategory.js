
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex}) => {

    const handleClick = () => {
         setShowIndex();
    }
       return (
        <div className="bg-gray-50 w-6/12 mx-auto my-4 shadow-lg  p-4">
            <div className="flex justify-between" onClick={handleClick}>
 <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>🔽</span>
            </div>
           
           {showItems && <ItemList items={data.itemCards}/>} 
        </div>
       )
}
export default RestaurantCategory;