import { SWIGGY_IMG } from "../utils/constants";

const RestaurantCard = ({restaurantInfo}) => {
  let {name, areaName, cloudinaryImageId, cuisines, id, promoted} = restaurantInfo.info
  

  return (
    <div className="w-90 rounded overflow-hidden relative cursor-pointer">
      {/* Trending badge */}
      {promoted && (
        <div className="absolute top-0 left-0 mt-2 ml-2 bg-black text-white py-2 px-3 rounded-full text-xs font-bold">
          Trending
        </div>
      )}

      {/* Restaurant image */}
      <img className="w-full h-24 sm:h-36 md:h-48 object-cover rounded-3xl" src={SWIGGY_IMG + cloudinaryImageId} />

      {/* Restaurant details */}
      <div className="px-4 py-2">
        <div className="font-bold text-sm mb-2 xl:text-xl">{name}</div>
        <p className="text-gray-500 text-xs xl:text-lg">{areaName}</p>
        <p className="text-gray-700 text-xs mb-1 xl:text-lg">{cuisines.join(', ')}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
