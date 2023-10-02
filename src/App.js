import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import RestaurantCard from "./components/RestaurantCard";

const App = () => {
    return(
        <>
            <Navbar />
            <HeroSection />
                <RestaurantCard />
        </>
    )
}

export default App;