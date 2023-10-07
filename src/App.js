import Navbar from "./components/Navbar";
import { RouterProvider } from "react-router-dom";
import useRoutes from "./hooks/useRoutes";
import RestaurantInfo from "./components/RestaurantInfo";
import RestaurantAccordion from "./components/RestaurantAccordion";

const App = () => {
    const router = useRoutes();
    return(
        <>        
            <RouterProvider router={router} />
        </>
    )
}

export default App;