import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import Navbar from './components/organisms/Navbar'
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import DetailProduct from "./pages/DetailProduct";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChatBot from "./components/template/ChatBot";
import ProtectedRoute from "./pages/ProtectedRoute";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import Education from "./pages/Education";
import DetailEducation from "./pages/DetailEducation";
import RegisterStore from "./pages/RegisterStore";

const Layout = () => {
  const location = useLocation();
  const pathsWithoutNavbar = ['/', '/register', '/education'];
  const shouldShowNavbar = !pathsWithoutNavbar.includes(location.pathname) && ['/home','/profile','/store','/cart','/checkout','/detail-product','/register/seller'].includes(location.pathname);

  return (
    <div className="font-Poppins">
      {shouldShowNavbar && <Navbar />}
      <div className="pt-[100px]">
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route element={<ChatBot />}>
            <Route path="/home" element={<Home />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/store" element={<Store />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/education" element={<Education />}/>
            <Route path="/detail-product" element={<DetailProduct />}/>
            <Route path="/detail-materi" element={<DetailEducation />}/>
            <Route path="/register/seller" element={<RegisterStore />}/>
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </div>
  )
}

const App = () => {
  return(
    <Router>
      <Layout />
    </Router>
  )
}

export default App
