import { useSelector } from "react-redux"
import CartItems from "../components/CartItems";
import { useEffect } from "react";
import { useState } from "react";
import ShippingForm from "../components/ShippingForm";

const CartPage = () => {
    const [cartTotal, setCartTotal] = useState(0)

    //get cart items from rtk store
    const cartItems = useSelector(store => store?.cart?.cartItems);

    //calculating the total cost of cart items
    useEffect(()=>{
        let cartAmount = cartItems?.map(c => (c.price*c.quantityToShip)/100).reduce((accu, curr) => {return accu + curr}, 0);
        setCartTotal(Math.ceil(cartAmount))
    },[cartItems])


  return (
    <div className="w-full sm:w-6/12 xl:w-6/12 m-auto">
        <div className="font-caveat text-center text-3xl mt-16 font-semibold text-pink-400">CART</div>
        <div>
            {
                cartItems?.length === 0 && <div className="font-caveat text-center mt-48 mb-64 font-extrabold text-3xl text-cyan-600">No foods in cart &nbsp; : ( </div>
            }
        </div>
        <div>
            {
                cartItems?.map(c => <CartItems key={c.id} cartItem={c} /> )
            }
        </div>
        <div className="flex justify-between m-4">
            {
                cartItems?.length !== 0 &&
                (
                    <>
                        <div className="text-right text-xl md:text-2xl text-green-700 font-extrabold">Grand Total : ₹ {cartTotal}</div>
                    </>
                )   
            }
        </div>
        {
            cartItems?.length !== 0 && <ShippingForm />
        }
        
        
    </div>
  )
}

export default CartPage