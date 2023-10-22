import { useState } from "react";
import MenuItems from "./MenuItems"

function RestaurantAccordion({cuisineDetails}) {
  const [showMenu, setShowmenu] = useState(0);

  const changeshowMenu = (title) => {
    setShowmenu(title);
  }

  return (
    <div className="dark:bg-sky-950">
      <div className='w-full md:w-9/12 xl:w-6/12 mx-auto mb-[-24] pb-10'>
          {/* accordion starts here */}
          { cuisineDetails?.map((c, i) => (
            <div key={c?.card?.card?.title}>
              <div className='flex justify-between m-5 bg-slate-100 p-5'>
                  <p className='text-lg text-red-600 font-semibold'>{c?.card?.card?.title} ({c?.card?.card?.itemCards?.length}) </p>
                  {
                    (showMenu === 0 || showMenu > 0) && (<p onClick={() => changeshowMenu(i)} className="fa-solid fa-plus mt-1"> </p>) 
                  }
              </div> 
              <div>
                {
                    (showMenu === i) && c?.card?.card?.itemCards.map(i => <MenuItems key={i?.card?.info?.id} item={i} />)
                }
              </div>
            </div>    
          ))
          }
      </div>
    </div>

  )
}

export default RestaurantAccordion;