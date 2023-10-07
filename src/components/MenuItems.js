// this component is designed to display the menu items displayed in restaurant details page

function MenuItems() {
  return (
        <>
            <div className='flex justify-between m-5'>
                <div>
                    <p className='border-2 w-4 h-4 object-cover bg-green-600'></p>
                    <p className='border-2 w-4 h-4 object-cover bg-red-600'></p>
                    <p className='text-base md:text-lg font-semibold'>Chicken Fingers</p>
                    <p>₹ 250</p>
                    <p className='mt-3 text-xs md:text-sm'>Delicious Chicken fingers coated in an extra tasty, crunchy coating.</p>
                </div>
                <div className=''>
                    <img src="https://www.cookclickndevour.com/wp-content/uploads/2020/08/paneer-butter-masala-recipe-a-683x1024-1.jpg" 
                        className='w-44 h-24 object-cover overflow-hidden'
                        alt="" />
                </div>
            </div>
            <div className='border-b-2'></div>
        </>
  )
}

export default MenuItems