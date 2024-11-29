// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import StoreProvider from "./contex/StoreContext";
import Footer from "./component/Footer/Footer";
import AppDownload from "./component/AppDownload/AppDownload";
import LoginPopup from "./component/LoginPopup/LoginPopup";



const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <StoreProvider>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
        <AppDownload />
        <Footer />
      </div>
    </StoreProvider>
  );
};

export default App;
