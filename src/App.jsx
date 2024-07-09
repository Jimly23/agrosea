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

const Layout = () => {
  const location = useLocation();
  const shouldShowNavbar = !['/register', '/'].includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <div className="pt-[100px]">
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/store" element={<Store />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/detail-product" element={<DetailProduct />}/>
        </Routes>
      </div>
    </>
  )
}

const App = () => {
  return(
    <Router>
      <Layout />
    </Router>
  )
}

// function App() {

//   return (
//     <>
//       <Router>
//         <Navbar />
//         <div className="pt-[100px]">
//           <Routes>
//             <Route path="/home" element={<Home />}/>
//             <Route path="/profile" element={<Profile />}/>
//             <Route path="/store" element={<Store />}/>
//             <Route path="/cart" element={<Cart />}/>
//             <Route path="/checkout" element={<Checkout />}/>
//             <Route path="/detail-product" element={<DetailProduct />}/>
//           </Routes>
//         </div>
//       </Router>
//     </>
//   )
// }

export default App
