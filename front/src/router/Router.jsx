import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Wishlist from "../pages/wishlist/Wishlist";
import Add from "../pages/add/Add";
import Detail from "../pages/detail/Detail";
import Basket from "../pages/basket/Basket";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/wishlist",
        element: <Wishlist />,
    },
    {
        path: "/add",
        element: <Add />,
    },
    {
        path: "/detail/:id",
        element: <Detail />,
    },
    {
        path: "/basket",
        element: <Basket />,
    },
]);

export default router