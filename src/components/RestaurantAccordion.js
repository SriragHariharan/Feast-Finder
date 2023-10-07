import MenuItems from "./MenuItems"

function RestaurantAccordion() {
  return (
    <div className='w-full md:w-9/12 xl:w-6/12 mx-auto'>
        {/* accordion starts here */}
        <div className='flex justify-between m-5'>
            <p className='text-lg font-semibold'>Recommended (22)</p>
            <p className="fa-solid fa-chevron-down mt-1"></p>
            {/* <p className="fa-solid fa-chevron-up mt-1"></p> */}
        </div>
        {/* menu items starts here */}
        <MenuItems />
    </div>
  )
}

export default RestaurantAccordion