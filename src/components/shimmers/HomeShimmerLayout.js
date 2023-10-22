import RestaurantCardShimmer from "./RestaurantCardShimmer"

function HomeShimmerLayout() {
  let arrayOfEight = Array.from(Array(8).keys())
  return (
    <div className="p-7 sm:p-20 grid grid-cols-4 gap-6 dark:bg-sky-950">
            {
                arrayOfEight.map(res =>(
                    <div key={res} className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
                        <RestaurantCardShimmer />
                    </div>
                ) )
            }
    </div>
  )
}

export default HomeShimmerLayout