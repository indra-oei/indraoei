import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/Home";

const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<HomePage />} />
          <Route path="/projects/:id" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteList;
