import React from "react";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router";
import Service from "./pages/Service/Service";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About";
import History from "./pages/History";
import Faq from "./pages/Faq";
import Contacts from "./pages/Contacts";
import NotFoundPage from "./pages/NotFoundPage";
import PortfolioSingle from "./pages/Portfolio/PortfolioSingle";
import BlogSingle from "./pages/Blog/BlogSingle";
import ServiceSingle from "./pages/Service/ServiceSingle";
import Career from "./pages/Career/Career";
import CareerSingle from "./pages/Career/CareerSingle";
import { DataProvider } from "./Context/DataContext";
import "./css/base.css";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/fontawesome.css";
import "./css/flaticon.css";
import "./css/pbminfotech-base-icons.css";
import "./css/shortcode.css";
import "./css/demo-internet.css";
import "./css/responsive.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollTop from "./components/common/ScrollTop";

const App = () => {
  return (
    <div>
      <DataProvider>
        <ScrollTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service-single/:id" element={<ServiceSingle />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-single/:id" element={<PortfolioSingle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-category/:category" element={<Blog />} />
          <Route path="/blog-single/:id" element={<BlogSingle />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career-single/:id" element={<CareerSingle />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-history" element={<History />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
};

export default App;
