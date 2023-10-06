import { useState } from "react";

function Search({ restaurants, updateFilteredRestaurants }) {

    const [query, setQuery] = useState('')

    const sortVeg = () => {
        let vegRestros = restaurants.filter(res => res.info.veg === true);
        updateFilteredRestaurants(vegRestros)
    }

    const allRestaurants = () => {
        updateFilteredRestaurants(restaurants)
    }

    const topRestaurants = () => {
        let topRestros = restaurants.filter(res => res?.info?.avgRating > 4.0)
        updateFilteredRestaurants(topRestros)
    }

    const handleSearch = e => {
        e.preventDefault();
        let searchedRestaurants = restaurants.filter(res => res.info?.name.toLowerCase().includes(query.toLowerCase()));
        updateFilteredRestaurants(searchedRestaurants);
    }


  return (
    <div className="mt-7 ">
        <div className="text-center">
            <input type="text" value={query} onChange={e => setQuery(e.target.value) } className="border-2 border-rose-400 px-4 py-1 active:border-rose-400 focus:outline-none" placeholder="search fav restro here" />
            <button onClick={handleSearch} className="border-2 border-l-0 bg-rose-400 border-rose-400 px-3 py-1">
                 <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            
            <button onClick={topRestaurants} className=" px-3 py-2 ml-1 mt-3 sm:mt-0 md:ml-4  font-normal bg-rose-300">
                Top &nbsp; <i className="fa-regular fa-star"></i>
            </button>
            <button onClick={allRestaurants} className=" px-3 py-2 ml-1 mt-3 sm:mt-0 md:ml-4  font-normal bg-rose-400">
                All  &nbsp; <i className="fa-solid fa-earth-americas"></i>
            </button>
            <button onClick={sortVeg} className=" px-3 py-2 ml-1 mt-3 sm:mt-0 md:ml-4  font-normal bg-green-400">
                Veg  &nbsp; <i className="fa-solid fa-leaf"></i>
            </button>
        </div>
    </div>
  )
}

export default Search