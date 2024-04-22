import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";

const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<HomePage />} />
          <Route path="/skills" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteList;
