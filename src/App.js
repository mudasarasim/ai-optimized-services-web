import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PlaceOrder from "./pages/PlaceOrder";
import MyOrders from "./pages/MyOrders";
import FurnitureOrder from "./pages/FurnitureOrder";
import AcOrder from "./pages/AcOrder";
import AcRepaireOrder from "./pages/AcRepaireOrder";
import SpaOrder from "./pages/SpaOrder";
import SalonOrder from "./pages/SalonOrder";
import LabOrder from "./pages/LabOrder";
import PestOrder from "./pages/PestOrder";
import CarOrder from "./pages/CarOrder";
import HandymanOrder from "./pages/HandymanOrder";
import FurnitureCLeaning from "./pages/FurnitureCLeaning";
import DeepOrder from "./pages/DeepOrder";
import DeepKitchen from "./pages/DeepKitchen";
import WaterCleaning from "./pages/WaterCleaning";
import WomenOrder from "./pages/WomenOrder";
import CargoOrder from "./pages/CargoOrder";
import MenOrder from "./pages/MenOrder";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/ServiceDetail" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/place-order/:serviceId" element={<PlaceOrder />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/FurnitureOrder/:serviceId" element={<FurnitureOrder />} />
          <Route path="/AcOrder/:serviceId" element={<AcOrder />} />
          <Route path="/AcRepaireOrder/:serviceId" element={<AcRepaireOrder />} />
          <Route path="/SpaOrder/:serviceId" element={< SpaOrder />} />
          <Route path="/SalonOrder/:serviceId" element={< SalonOrder />} />
          <Route path="/LabOrder/:serviceId" element={<LabOrder />} />
          <Route path="/PestOrder/:serviceId" element={<PestOrder />} />
          <Route path="/CarOrder/:serviceId" element={<CarOrder />} />
          <Route path="/HandymanOrder/:serviceId" element={<HandymanOrder />} />
          <Route path="/FurnitureCLeaning/:serviceId" element={<FurnitureCLeaning/>} />
          <Route path="/DeepOrder/:serviceId" element={<DeepOrder/>} />
          <Route path="/DeepKitchen/:serviceId" element={<DeepKitchen/>} />
          <Route path="/WaterCleaning/:serviceId" element={<WaterCleaning/>} />
          <Route path="/WomenOrder/:serviceId" element={<WomenOrder/>} />
          <Route path="/CargoOrder/:serviceId" element={<CargoOrder/>} />
          <Route path="/MenOrder/:serviceId" element={<MenOrder/>} />          
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
