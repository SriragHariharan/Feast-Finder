import { RouterProvider } from "react-router-dom";
import useRoutes from "./hooks/useRoutes";
import { Provider } from "react-redux";
import store from "./redux-toolkit/store";

const App = () => {
    const router = useRoutes();
    return(
        <>        
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </>
    )
}

export default App;