const RestaurantCardShimmer = () => {
  return (
    <div className="w-90 mb-8">
      
      {/* Restaurant image shimmer */}
      <div className="w-full h-24 sm:h-36 md:h-48 object-cover bg-slate-200 mb-1">
      </div>

      {/* Restaurant details shimmer */}
      <div className=" py-2">
        <div className="h-8 bg-slate-200 mb-3"></div>
        <div className="h-6 bg-slate-200 mb-3"></div>
        <div className="h-6 bg-slate-200"></div>
      </div>
    </div>
  );
}

export default RestaurantCardShimmer;