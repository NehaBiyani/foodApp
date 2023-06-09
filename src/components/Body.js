 import {restaurantList} from "../Constant"
 import RestaurantCart from "./RestaurantCart"
 import { useState ,useEffect} from "react"
 function filterData(searchText,restaurants){
   const filterData= restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText));
   debugger
   return filterData;
 }
 const Body = () =>{
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText,setSearchText]= useState("")
    useEffect(()=>{
        debugger
      getRestaurantData()
    },[])
   async function getRestaurantData(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        debugger
         setRestaurants(json?.data?.cards[2].data?.data?.cards);
        console.log(json?.data?.cards[2]?.data?.data?.cards)
    }
    return (
        <>
        <div className="search-container">
            <input 
            type="text"
            className="search-input"
            placeholder="Search"
            values={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value)
            }}
            />
            <button className="search-btn"
            onClick={()=>{
              const data=  filterData(searchText,restaurants);
              setRestaurants(data);
            }}
            >Search</button>

        </div>
        <div className="restaurant-list">{
   
            restaurants.map((restaurant,index)=>{
                debugger
                console.log(restaurant);
                debugger

                return <RestaurantCart  {...restaurant.data} key={restaurant.data?.id}/>

            })
        }

            
        </div>
        </>
    )
}
export default Body