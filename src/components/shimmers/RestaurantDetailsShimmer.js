import React from 'react'

let MenuItemsShimmer = () => {
    return(
        <>
            <div className='flex justify-around w-full m-3'>
                <div className="w-9/12">
                    
                    <div className='w-9/12 h-10 bg-slate-200 mb-2'></div>
                    <div className='w-9/12 h-8 bg-slate-200 mb-2'></div>
                    <div className='w-9/12 h-6  bg-slate-200'></div>
                </div>
                <div className="w-3/12">
                    <div className='w-9/12 h-28 bg-slate-200'></div>                    
                </div>
            </div>
            <div className='border-b-2'></div>
        </>   

    )
}

function RestaurantDetailsShimmer() {
  return (
    <div className="bg-sky-950">
        <div className='w-full md:w-9/12 xl:w-6/12 mx-auto'>

            {/* restro name, cuisines, location, ratings */}
            <div className='w-full p-4 flex'>
                <div className='w-9/12'>
                    <div className='h-12 w-9/12 bg-slate-200 mb-3'></div>
                    <div className='h-8 w-9/12 bg-slate-200 mb-3'></div>
                    <div className='h-6 w-9/12 bg-slate-200 mb-3'>
                    </div>
                </div>

                <div className='border-2 w-3/12 bg-slate-200'></div>
            </div> 

            {/* arrival and cost for two */}
            <div className='flex mt-2 m-4 h-10 bg-slate-200'>
            </div>

            {/* accordion shimmers */}
            <div className='mt-6 m-4 h-14 bg-slate-200'></div>
            <MenuItemsShimmer />
            <MenuItemsShimmer />
            <MenuItemsShimmer />
            <MenuItemsShimmer />
            
        </div>
    </div>
  )
}

export default RestaurantDetailsShimmer