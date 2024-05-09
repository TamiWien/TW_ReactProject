import { createBrowserRouter } from "react-router-dom";
import HomePage from './components/Pages/HomePage';
import ContactUs from './components/Pages/ContactUs';
import NotFound from './components/Pages/NotFound';
import Layout from "./components/Layout";
import OurStory from "./components/Pages/OurStory";
import Store from "./components/Pages/Store";
import Product from "./components/Products/Product";
import Cart from "./components/Products/Cart";
import Checkout from "./components/Products/Checkout";
import Thanks from "./components/Products/Thanks";


const router = createBrowserRouter([
    {element: <Layout/>, children:[
        {path: "/", element: <HomePage/>},
        {path: "/ourStory", element: <OurStory/>},
        {path: "/contact", element: <ContactUs/>},
        
        {path: "/store", 
        children:[ 
            { index: true, element: <Store/>},
            { path: ":name", element: <Product/>}
        ]},
        {path: "/cart", element: <Cart/>},
        {path: "/checkout", element: <Checkout/>},
        {path: "/thanks", element: <Thanks/>},
        {path: "*", element: <NotFound/>},
    ]}
]);

export default router