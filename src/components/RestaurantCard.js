
const RestaurantCard = () => {
    let img = 'data:image/jpeg;base64,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'


  return (
    <div className="w-72 rounded overflow-hidden shadow-2xl relative">
      {/* Trending badge */}
      {/* {trending && ( */}
        <div className="absolute top-0 left-0 mt-2 ml-2 bg-cyan-500 text-white py-1 px-2 rounded-full text-xs font-bold">
          Trending
        </div>
      {/* )} */}

      {/* Restaurant image */}
      <img className="w-full h-48 object-cover" src={img} />

      {/* Restaurant details */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Noor Jehan</div>
        <p className="text-gray-700 text-base mb-2">Cuisines: south indian, chinese</p>
        <p className="text-gray-700 text-base">Palakkad, KL</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
