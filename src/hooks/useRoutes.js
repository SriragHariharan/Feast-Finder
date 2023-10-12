import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import HomePage from "../layouts/HomePage";
import RestaurantDetails from "../layouts/RestaurantDetails";
import CartPage from "../layouts/CartPage";

const useRoutes = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<HomePage />} />
                <Route path="view-restaurant/:id" element={<RestaurantDetails />} />
                <Route path="cart" element={<CartPage />} />
            </Route>
        )
    );
    return router;
}

export default useRoutes;