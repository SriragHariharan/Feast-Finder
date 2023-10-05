//this component is used to map thru the restaurants fetched from api

import useGetRestaurants from "../hooks/useGetRestaurants";
import RestaurantCard from "./RestaurantCard";
import HomeShimmerLayout from "./shimmers/HomeShimmerLayout";

const Restaurants = () => {
    const restaurants = useGetRestaurants();
    
    //shimmer code to be shown on loading
    if(restaurants.length === 0){
        return <HomeShimmerLayout />
    }

    return(
        <div className="p-7 sm:p-20 grid grid-cols-4 gap-6">
            {
                restaurants.map(res =>(
                    <div key={res?.info?.id} className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
                        <RestaurantCard restaurantInfo={res} />
                    </div>
                ) )
            }            
        </div>
    )
}

export default Restaurants;