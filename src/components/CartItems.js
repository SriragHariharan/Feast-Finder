//this component is used to show individual cart items displayed in cart page

import React from 'react'
import { SWIGGY_IMG } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem, updateProductQuantity } from '../redux-toolkit/cartReducer'

const CartItems = ({cartItem}) => {
    
    const dispatch = useDispatch()
    const cartItems = useSelector(store => store?.cart?.CartItems)

    //delete an item from cart
    function handleDeleteItem(itemID){
        dispatch(deleteCartItem(itemID));
    }

    //update quantity of product
    const handleProductQuantity = ({itemID, quantity}) => {
        dispatch(updateProductQuantity({itemID, quantity}))
    }


    return (
        <div key={cartItem?.id}>
            <div className='flex justify-between m-5'>
                <div className="w-9/12">
                    {
                        cartItem?.isVeg ?
                        (<p className='border-2 w-4 h-4  bg-green-600'></p> )
                        :
                        (<p className='border-2 w-4 h-4  bg-red-600'></p>)
                    }
                    
                    <p className='text-base md:text-lg font-semibold'>{cartItem?.name}</p>
                    <p>₹ {((cartItem?.price)/100 || (cartItem?.defaultPrice)/100) * cartItem?.quantityToShip } </p>
                    <p className='mt-3 text-xs md:text-sm'>{cartItem?.description}</p>
                    <p className='mt-3 text-md md:text-base'>Order quantity : {cartItem?.quantityToShip}</p>
                    <div className='mt-5'>
                        {   (cartItem?.quantityToShip !== 1) ?
                            (<button
                                onClick={() => handleProductQuantity({itemID: cartItem?.id, quantity: -1 })} 
                                className='bg-red-600 px-3 rounded-lg text-white font-extrabold mr-3'
                            >-</button>)
                            : (<button className='bg-red-600 px-3 rounded-lg text-white mr-3'>min quantity</button>)
                        }
                        <p className='inline-block'> {cartItem?.quantityToShip} </p>
                        
                        {   (cartItem?.quantityToShip !== 5) ?
                            (<button 
                                onClick={() => handleProductQuantity({itemID: cartItem?.id, quantity: +1 })} 
                                className='bg-green-600 px-3 rounded-lg text-white font-extrabold ml-3'
                            >+</button>)
                            : (<button className='bg-green-600 px-3 rounded-lg text-white ml-3'>max quantity</button>)
                        }
                        <button onClick={()=>handleDeleteItem(cartItem?.id)} className="bg-pink-500 fa-solid fa-trash py-1 px-3 rounded-lg text-white font-extrabold ml-3"></button>
                    </div>
                    
                </div>
                <div className="w-3/12">
                    <img  
                        src={SWIGGY_IMG + cartItem?.imageId }
                        className='w-36 h-28'
                    />
                    
                </div>
            </div>
            <div className='border-b-2'></div>
        </div>   
    )
}

export default CartItems