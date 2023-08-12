import React from "react";
import "./style.css";
import Login from './Components/Auth/Login';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PATH_NAME } from "./Components/Utils/PathName";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Product from "./Components/Pages/Product/Index";
import Pricing from "./Components/Pages/Pricing/Pricing";
import Home from "./Components/Pages/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH_NAME.LOGIN} element={<Login />} />
        <Route element={<Home />}>
          <Route path={PATH_NAME.DASHBOARD} element={<Dashboard />} />
          <Route path={PATH_NAME.PRODUCT} element={<Product />} />
          <Route path={PATH_NAME.PRICING} element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
