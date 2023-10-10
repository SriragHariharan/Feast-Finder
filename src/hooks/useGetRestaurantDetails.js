import { useEffect, useState } from "react"
import { SWIGGY_RESTRO_DETAILS_API } from "../utils/constants";

const useGetRestaurantDetails = (id) => {
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const [cuisineDetails, setCuisineDetails] = useState(null);

    const getInfo = async(id) => {
        let data = await fetch(SWIGGY_RESTRO_DETAILS_API + id)
        let json = await data.json();
        let cuisinesWithAdditionalInfo = json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        let cuisines = cuisinesWithAdditionalInfo?.filter(c => c?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        setRestaurantDetails(json?.data?.cards[0]?.card?.card.info);
        setCuisineDetails(cuisines)
    }

    useEffect( () => { getInfo(id) },[id] );

    return{restaurantDetails, cuisineDetails}
}

export default useGetRestaurantDetails;