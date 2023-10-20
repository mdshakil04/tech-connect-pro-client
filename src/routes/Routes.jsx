import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root"
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Athentication/Login/Login";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProducts/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import NewProducts from "../Pages/NewProducts/NewProducts";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Registration from "../Pages/Athentication/Registration/Registration";
import Products from "../Pages/Products/Products";
import PrivateRoute from "./PrivateRoute";
import ProductDetail from "../Pages/Products/ProductDetail";
const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/addProducts',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:'/myCart',
                element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path:'/newProducts',
                element:<NewProducts></NewProducts>
            },
            {
                path:'/aboutUS',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/register',
                element:<Registration></Registration>
            },
            {
                path:'/products/:name',
                element:<Products></Products>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/product/:id',
                element:<PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/product')
            }
        ]
    }
])
export default routes;