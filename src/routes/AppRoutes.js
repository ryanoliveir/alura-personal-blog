import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar";
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import NotFound from '../pages/404'
import Footer from "components/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;