import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Restaurants from "./components/Restaurants";
import Search from "./components/Search";

import { RouterProvider } from "react-router-dom";
import useRoutes from "./hooks/useRoutes";

const App = () => {
    const router = useRoutes();
    return(
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App;