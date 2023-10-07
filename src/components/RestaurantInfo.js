import React from 'react'

function RestaurantInfo() {
  return (
    <div className='w-full md:w-9/12 xl:w-6/12 mx-auto'>
        {/* restro name, cuisines, location, ratings */}
        <div className='flex justify-between p-4'>
            <div className='text-left'>
                <p className='font-semibold text-sm mb-3 md:text-3xl'>Hotel Noor Jehan</p>
                <p className='text-gray-500 text-xs mb-1 md:text-xl'>North indian,  biriyani</p>
                <p className='text-gray-500 text-xs md:text-sm'>
                    <i class="fa-solid fa-location-dot"> &nbsp;</i>
                    Nungambakkam -- 6.5 km
                </p>
            </div>
            <div className='border-2 border-slate-400 text-center'>
                <div className='border-b-2 border-slate-400'>
                    <i className="fa-solid fa-star" style={{color: "#039b68"}}></i>
                    <p className='text-green-500 text-sm font-bold mt-2 xl:text-lg'>4.4</p>
                </div>
                <div>
                    <p className='text-gray-500 text-xs'>1k+ ratings</p>
                </div>
            </div>
        </div>
        
        <div className=' border-b-2 mt-5'></div>

        {/* arrival and cost for two */}
        <div className='flex mt-2 m-4'>
            <i className="text-xs md:text-lg fa-regular fa-clock mt-1"></i>
            <p className='text-xs md:text-lg font-medium ml-2 mr-8'>28 MINS</p>
            
            <i className="text-xs md:text-lg fa-solid fa-indian-rupee-sign mt-1"></i>
            <p className='text-xs md:text-lg font-medium ml-2 '>400 for two</p>
        </div>

        <div className=' border-b-2 mt-2'></div>
    </div>

  )
}

export default RestaurantInfo;