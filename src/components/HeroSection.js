import thali from '../../public/assets/thali.png'

const HeroSection = () => {
    return(
        <div className="pl-12 pr-12 grid grid-cols-3">
            <div className='font-caveat col-span-2 text-slate-500 text-sm sm:text-3xl md:text-4xl md:p-10 lg:text-6xl '>
                <i>
                Embark on a culinary adventure with Feast Finder, where every craving meets its match! From sizzling street eats to gourmet delights, we're your passport to a world of flavors, delivered to your door.
                </i>
            </div>
            <div className='col-span-1'>
                 {/* sm:w-40  */}
                <img src={thali} alt="banner image" className='w-60 sm:w-80 md:w-96' />
            </div>
        </div>
    )
}

export default HeroSection;