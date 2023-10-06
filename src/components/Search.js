
function Search() {
  return (
    <div className="mt-7 ">
        <div className="text-center">
            <input type="text" className="border-2 border-rose-400 px-4 py-1 active:border-rose-400 focus:outline-none" placeholder="search fav restro here" />
            <button className="border-2 border-l-0 bg-rose-400 border-rose-400 px-3 py-1">
                 <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            
            <button className=" px-3 py-2 ml-1 mt-3 sm:mt-0 md:ml-4  font-normal bg-rose-300">
                Top &nbsp; <i class="fa-regular fa-star"></i>
            </button>
            <button className=" px-3 py-2 ml-1 mt-3 sm:mt-0 md:ml-4  font-normal bg-rose-400">
                All  &nbsp; <i class="fa-solid fa-earth-americas"></i>
            </button>
            <button className=" px-3 py-2 ml-1 mt-3 sm:mt-0 md:ml-4  font-normal bg-green-400">
                Veg  &nbsp; <i class="fa-solid fa-leaf"></i>
            </button>
        </div>
    </div>
  )
}

export default Search