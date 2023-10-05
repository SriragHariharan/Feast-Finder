//this is a custom hook to fetch the data of restaurants 

import { useEffect, useState } from "react"
import { SWIGGY_HOME_API } from "../utils/constants";


export default function useGetRestaurants(){
    const [restaurants, setRestaurants] = useState([]);
    let fetchRestaurants = async () => {
        let data = await fetch(SWIGGY_HOME_API)
        let json = await data.json();
        setRestaurants(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(() => {
         fetchRestaurants()
    },[])
    
    return restaurants;
}