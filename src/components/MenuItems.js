// this component is designed to display the menu items displayed in restaurant details page

import { useDispatch, useSelector } from "react-redux"
import { FEAST_FINDER_LS_CART_KEY, SWIGGY_IMG } from "../utils/constants"
import { addToCart } from "../redux-toolkit/cartReducer";

function MenuItems({item}) {

    //add items to cart on button click
    const dispatch = useDispatch()
    const add2cart = (item) => {
        item?.card?.info.quantityToShip = 1
        dispatch(addToCart(item?.card?.info));
    }

    return (
        <div key={item?.card?.info?.id}>
            <div className='flex justify-between m-5'>
                <div className="w-9/12">
                        {item?.card?.info?.isVeg === 1 ? 
                            (<p className='border-2 w-4 h-4  bg-green-600'></p>) 
                            : (<p className='border-2 w-4 h-4  bg-red-600'></p>)
                        }
                    
                    <p className='text-base md:text-lg font-semibold'>{item?.card?.info?.name}</p>
                    <p>₹ {(item?.card?.info?.price)/100 || (item?.card?.info?.defaultPrice)/100} </p>
                    <p className='mt-3 text-xs md:text-sm'>{item?.card?.info?.description}</p>
                </div>
                <div className="w-3/12">
                    <div className="absolute">
                        <button onClick={()=>add2cart(item)} className="bottom-5 mx-auto bg-green-400 rounded-lg p-2 top-10">ADD +</button>
                    </div>
                    { item?.card?.info?.imageId && <img src={ SWIGGY_IMG + item?.card?.info?.imageId } 
                        className='w-36 h-28'
                    />}
                </div>
            </div>
            <div className='border-b-2'></div>
        </div>   
  )
}

export default MenuItems