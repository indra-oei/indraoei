import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import WorksPage from "../pages/Works";
import SkillsPage from "../pages/Skills";

const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteList;
