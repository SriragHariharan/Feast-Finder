import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Restaurants from "./components/Restaurants";
import Search from "./components/Search";

const App = () => {
    return(
        <>
            <Navbar />
            <HeroSection />
            <Restaurants />
            <Footer/>
        </>
    )
}

export default App;