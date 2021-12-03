import {
    Routes,
    Route
  } from "react-router-dom";

//import components
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";

//import pages
import Home from './Pages/home';
//import Products from './Pages/products';
import Articles from './Pages/articles';
import AboutUs from './Pages/about_us';
import Login from './Pages/login';
import NotFound from './Pages/not_found';
import Carts from './Pages/cart';
import Tampil from "./Pages/tampil_product";
//import App from "./Pages/ambildata";
//import Products from "./Pages/products1";
//import Products from "./Pages/products";

export default function Routing(){
   
    return(
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Tampil />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about_us" element={<AboutUs />} />        
        <Route path="/login" element={<Login />} />
        <Route path="/carts" element={<Carts />} />
        {/* <Route path="/notifications" element={<Notifications />} /> */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    <Footer />
    </>
    )
}