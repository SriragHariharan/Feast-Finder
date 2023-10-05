//this component is used to map thru the restaurants fetched from api

import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
    return(
        <div className="p-7 sm:p-20 grid grid-cols-4 gap-6">

            <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
                <RestaurantCard/>
            </div>
            <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
                <RestaurantCard/>
            </div>
            <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
                <RestaurantCard/>
            </div>
            <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
                <RestaurantCard/>
            </div>
            <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
                <RestaurantCard/>
            </div>
            <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
                <RestaurantCard/>
            </div>

        </div>
    )
}

export default Restaurants;