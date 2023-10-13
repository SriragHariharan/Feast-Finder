import React from 'react'
import RestaurantAccordion from '../components/RestaurantAccordion'
import RestaurantInfo from '../components/RestaurantInfo';
import { useParams } from 'react-router-dom'
import useGetRestaurantDetails from '../hooks/useGetRestaurantDetails';
import RestaurantDetailsShimmer from '../components/shimmers/RestaurantDetailsShimmer';

function RestaurantDetails() {
    const {id} = useParams();
    const {restaurantDetails, cuisineDetails} = useGetRestaurantDetails(id);

    console.log("restaurantDetails :", restaurantDetails);
    console.log("cuisineDetails :", cuisineDetails);
  return (
    <div>
      {
        ( restaurantDetails && cuisineDetails ) ?
        (
          <>
            <RestaurantInfo restaurantDetails={restaurantDetails} />
            <RestaurantAccordion cuisineDetails={cuisineDetails} />
          </>
        ):
        (
          <RestaurantDetailsShimmer />
        )
      }
    </div>
  )
}

export default RestaurantDetails