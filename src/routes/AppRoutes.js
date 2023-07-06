import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar";
import Home from '../pages/Home';
import Layout from "components/Layout";
import Post from 'components/Post';
import AboutMe from '../pages/AboutMe';
import NotFound from '../pages/404'
import Footer from "components/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/> 
          <Route path="aboutme" element={<AboutMe/>}/> 
          <Route path="posts/:id" element={<Post/>}/> 
        </Route>

      
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;