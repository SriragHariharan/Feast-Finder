//this component is used to map thru the restaurants fetched from api

import { useEffect, useState } from "react";
import useGetRestaurants from "../hooks/useGetRestaurants";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import HomeShimmerLayout from "./shimmers/HomeShimmerLayout";

const Restaurants = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const restaurants = useGetRestaurants();
    // console.log("first ::", restaurants)
    
    useEffect(() => {
        setFilteredRestaurants(restaurants)
    },[restaurants])

    //shimmer code to be shown on loading
    if(restaurants.length === 0){
        return <HomeShimmerLayout />
    }

    //update filtered restaurants
      const updateFilteredRestaurants = (newRestaurants) => {
        setFilteredRestaurants(newRestaurants);
    };

    return(
        <>
            <Search restaurants={restaurants} updateFilteredRestaurants={updateFilteredRestaurants} />
            {
                filteredRestaurants?.length ===0 ?
                (<div className="text-center text-blue-700 mt-32 mb-32 font-bold text-3xl">No Restaurants to show</div>)
                :
                (<div className="p-7 sm:p-20 grid grid-cols-4 gap-6">
                    {
                        filteredRestaurants.map(res =>(
                            <div key={res?.info?.id} className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
                                <RestaurantCard restaurantInfo={res} />
                            </div>
                        ) )
                    }            
                </div>)
            }
        </>
    )
}

export default Restaurants;