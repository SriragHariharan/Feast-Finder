[1mdiff --git a/src/components/MenuItems.js b/src/components/MenuItems.js[m
[1mindex 75c6c8e..7525537 100644[m
[1m--- a/src/components/MenuItems.js[m
[1m+++ b/src/components/MenuItems.js[m
[36m@@ -1,24 +1,33 @@[m
 // this component is designed to display the menu items displayed in restaurant details page[m
 [m
[31m-function MenuItems() {[m
[32m+[m[32mimport { SWIGGY_IMG } from "../utils/constants"[m
[32m+[m
[32m+[m[32mfunction MenuItems({item}) {[m
[32m+[m[32m    console.log("first :::", item)[m
   return ([m
[31m-        <>[m
[32m+[m[32m        <div key={item?.card?.info?.id}>[m
             <div className='flex justify-between m-5'>[m
[31m-                <div>[m
[31m-                    <p className='border-2 w-4 h-4 object-cover bg-green-600'></p>[m
[31m-                    <p className='border-2 w-4 h-4 object-cover bg-red-600'></p>[m
[31m-                    <p className='text-base md:text-lg font-semibold'>Chicken Fingers</p>[m
[31m-                    <p>₹ 250</p>[m
[31m-                    <p className='mt-3 text-xs md:text-sm'>Delicious Chicken fingers coated in an extra tasty, crunchy coating.</p>[m
[32m+[m[32m                <div className="w-9/12">[m
[32m+[m[32m                        {item?.card?.info?.isVeg === 1 ?[m[41m [m
[32m+[m[32m                            (<p className='border-2 w-4 h-4  bg-green-600'></p>)[m[41m [m
[32m+[m[32m                            : (<p className='border-2 w-4 h-4  bg-red-600'></p>)[m
[32m+[m[32m                        }[m
[32m+[m[41m                    [m
[32m+[m[32m                    <p className='text-base md:text-lg font-semibold'>{item?.card?.info?.name}</p>[m
[32m+[m[32m                    <p>₹ {(item?.card?.info?.price)/100 || (item?.card?.info?.defaultPrice)/100}</p>[m
[32m+[m[32m                    <p className='mt-3 text-xs md:text-sm'>{item?.card?.info?.description}</p>[m
                 </div>[m
[31m-                <div className=''>[m
[31m-                    <img src="https://www.cookclickndevour.com/wp-content/uploads/2020/08/paneer-butter-masala-recipe-a-683x1024-1.jpg" [m
[31m-                        className='w-44 h-24 object-cover overflow-hidden'[m
[31m-                        alt="" />[m
[32m+[m[32m                <div className="w-3/12">[m
[32m+[m[32m                    <div className="absolute">[m
[32m+[m[32m                        <button className="bottom-5 mx-auto bg-green-400 rounded-lg p-2 top-10">ADD +</button>[m
[32m+[m[32m                    </div>[m
[32m+[m[32m                    { item?.card?.info?.imageId && <img src={ SWIGGY_IMG + item?.card?.info?.imageId }[m[41m [m
[32m+[m[32m                        className='w-36 h-28'[m
[32m+[m[32m                    />}[m
                 </div>[m
             </div>[m
             <div className='border-b-2'></div>[m
[31m-        </>[m
[32m+[m[32m        </div>[m[41m   [m
   )[m
 }[m
 [m
[1mdiff --git a/src/components/RestaurantAccordion.js b/src/components/RestaurantAccordion.js[m
[1mindex 80bc83a..9f292ac 100644[m
[1m--- a/src/components/RestaurantAccordion.js[m
[1m+++ b/src/components/RestaurantAccordion.js[m
[36m@@ -1,18 +1,34 @@[m
[32m+[m[32mimport { useState } from "react";[m
 import MenuItems from "./MenuItems"[m
 [m
[31m-function RestaurantAccordion() {[m
[32m+[m[32mfunction RestaurantAccordion({cuisineDetails}) {[m
[32m+[m[32m  const [showMenu, setShowmenu] = useState(0);[m
[32m+[m
[32m+[m[32m  const changeshowMenu = (title) => {[m
[32m+[m[32m    setShowmenu(title);[m
[32m+[m[32m  }[m
[32m+[m
   return ([m
     <div className='w-full md:w-9/12 xl:w-6/12 mx-auto'>[m
         {/* accordion starts here */}[m
[31m-        <div className='flex justify-between m-5'>[m
[31m-            <p className='text-lg font-semibold'>Recommended (22)</p>[m
[31m-            <p className="fa-solid fa-chevron-down mt-1"></p>[m
[31m-            {/* <p className="fa-solid fa-chevron-up mt-1"></p> */}[m
[31m-        </div>[m
[31m-        {/* menu items starts here */}[m
[31m-        <MenuItems />[m
[32m+[m[32m        { cuisineDetails?.map((c, i) => ([m
[32m+[m[32m          <div key={c?.card?.card?.title}>[m
[32m+[m[32m            <div className='flex justify-between m-5 bg-slate-100 p-5'>[m
[32m+[m[32m                <p className='text-lg text-red-600 font-semibold'>{c?.card?.card?.title} ({c?.card?.card?.itemCards?.length}) </p>[m
[32m+[m[32m                {[m
[32m+[m[32m                  (showMenu === 0 || showMenu > 0) && (<p onClick={() => changeshowMenu(i)} className="fa-solid fa-plus mt-1"> </p>)[m[41m [m
[32m+[m[32m                }[m
[32m+[m[32m            </div>[m[41m [m
[32m+[m[32m            <div>[m
[32m+[m[32m              {[m
[32m+[m[32m                  (showMenu === i) && c?.card?.card?.itemCards.map(i => <MenuItems item={i} />)[m
[32m+[m[32m              }[m
[32m+[m[32m            </div>[m
[32m+[m[32m          </div>[m[41m    [m
[32m+[m[32m        ))[m
[32m+[m[32m        }[m
     </div>[m
   )[m
 }[m
 [m
[31m-export default RestaurantAccordion[m
\ No newline at end of file[m
[32m+[m[32mexport default RestaurantAccordion;[m
\ No newline at end of file[m
[1mdiff --git a/src/components/RestaurantInfo.js b/src/components/RestaurantInfo.js[m
[1mindex c3fff34..d0608df 100644[m
[1m--- a/src/components/RestaurantInfo.js[m
[1m+++ b/src/components/RestaurantInfo.js[m
[36m@@ -1,25 +1,26 @@[m
 import React from 'react'[m
 [m
[31m-function RestaurantInfo() {[m
[31m-  return ([m
[32m+[m[32mfunction RestaurantInfo({restaurantDetails}) {[m
[32m+[m
[32m+[m[32m    return ([m
     <div className='w-full md:w-9/12 xl:w-6/12 mx-auto'>[m
         {/* restro name, cuisines, location, ratings */}[m
         <div className='flex justify-between p-4'>[m
             <div className='text-left'>[m
[31m-                <p className='font-semibold text-sm mb-3 md:text-3xl'>Hotel Noor Jehan</p>[m
[31m-                <p className='text-gray-500 text-xs mb-1 md:text-xl'>North indian,  biriyani</p>[m
[32m+[m[32m                <p className='font-semibold text-sm mb-3 md:text-3xl'>{restaurantDetails?.name}</p>[m
[32m+[m[32m                <p className='text-gray-500 text-xs mb-1 md:text-xl'>{restaurantDetails?.cuisines.join(', ')}</p>[m
                 <p className='text-gray-500 text-xs md:text-sm'>[m
[31m-                    <i class="fa-solid fa-location-dot"> &nbsp;</i>[m
[31m-                    Nungambakkam -- 6.5 km[m
[32m+[m[32m                    <i className="fa-solid fa-location-dot"> &nbsp;</i>[m
[32m+[m[32m                    {restaurantDetails?.locality}[m
                 </p>[m
             </div>[m
             <div className='border-2 border-slate-400 text-center'>[m
                 <div className='border-b-2 border-slate-400'>[m
                     <i className="fa-solid fa-star" style={{color: "#039b68"}}></i>[m
[31m-                    <p className='text-green-500 text-sm font-bold mt-2 xl:text-lg'>4.4</p>[m
[32m+[m[32m                    <p className='text-green-500 text-sm font-bold mt-2 xl:text-lg'>{restaurantDetails?.avgRating}</p>[m
                 </div>[m
                 <div>[m
[31m-                    <p className='text-gray-500 text-xs'>1k+ ratings</p>[m
[32m+[m[32m                    <p className='text-gray-500 text-xs'>{restaurantDetails?.totalRatingsString}</p>[m
                 </div>[m
             </div>[m
         </div>[m
[36m@@ -29,10 +30,10 @@[m [mfunction RestaurantInfo() {[m
         {/* arrival and cost for two */}[m
         <div className='flex mt-2 m-4'>[m
             <i className="text-xs md:text-lg fa-regular fa-clock mt-1"></i>[m
[31m-            <p className='text-xs md:text-lg font-medium ml-2 mr-8'>28 MINS</p>[m
[32m+[m[32m            <p className='text-xs md:text-lg font-medium ml-2 mr-8'>Below 20 MINS</p>[m
             [m
             <i className="text-xs md:text-lg fa-solid fa-indian-rupee-sign mt-1"></i>[m
[