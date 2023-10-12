//this form is used to collect the address of users to deliver products
import { useForm } from "react-hook-form"

const ShippingForm = () => {
  
  const { register, handleSubmit, formState: { errors }, } = useForm()

  //get form data on submitting
  const onSubmit = (data) => console.log(data)

  return (
    <div className="border-2 m-10 p-5  border-black mb-28 ">
      <div className="text-center font-semibold text-xl mb-4">Delivery Info</div>
        <form onSubmit={handleSubmit(onSubmit)}>

            <input  {...register("userName", { required: true, maxLength: 20, minLength:3 })} 
                    type="text" placeholder="User name"
                    className="p-2 w-full border-4 mb-4" 
            />
            { errors.userName?.type === "required" && (<p className="text-red-600 mb-5 mt-[-18] font-medium text-base">   User name is required  </p>) }
            { errors.userName?.type === "maxLength" && (<p className="text-red-600 mb-5 mt-[-18] font-medium text-base">  User name too long     </p>) }
            { errors.userName?.type === "minLength" && (<p className="text-red-600 mb-5 mt-[-18] font-medium text-base">  User name too short    </p>) }

            <input  {...register("mobile", { required: true, minLength:10, maxLength: 10 })} 
                    type="number" 
                    placeholder="contact number" 
                    className="p-2 w-full border-4 mb-4" 
            />
            { errors.mobile?.type === "required" && (<p className="text-red-600 mb-5 mt-[-18] font-medium text-base">   Mobile number is required  </p>) }
            { errors.mobile?.type === "maxLength" && (<p className="text-red-600 mb-5 mt-[-18] font-medium text-base">  Mobile number too long     </p>) }
            { errors.mobile?.type === "minLength" && (<p className="text-red-600 mb-5 mt-[-18] font-medium text-base">  Mobile number too short    </p>) }

            <textarea  {...register("address", { required: true, minLength:10, maxLength: 100 })}
                    cols="30" rows="4" 
                    placeholder="delivery address" 
                    className="p-2 w-full border-4 mb-4" 
            ></textarea>
            { errors.address?.type === "required" && (<p className="text-red-600 mb-5 mt-[-18] font-medium text-base">   Address is required  </p>) }
            { errors.address?.type === "maxLength" && (<p className="text-red-600 mb-5 mt-[-18] font-medium text-base">  Address too long     </p>) }
            { errors.address?.type === "minLength" && (<p className="text-red-600 mb-5 mt-[-18] font-medium text-base">  Address too short    </p>) }

            <button 
                    type="submit"
                    className="p-2 w-full bg-green-500 font-bold rounded-full mt-5 mb-5"
            >Place Order</button>
        </form>
    </div>
  )
}

export default ShippingForm