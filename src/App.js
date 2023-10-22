import { RouterProvider } from "react-router-dom";
import useRoutes from "./hooks/useRoutes";
import { useSelector } from "react-redux";

const App = () => {
    const router = useRoutes();
    const darkTheme = useSelector(store => store?.theme?.darkTheme )

    return(
        <div className={`${darkTheme && "dark"}`}>
            <RouterProvider router={router} />
        </div>
    )
}

export default App;