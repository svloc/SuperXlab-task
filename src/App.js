import React, { useState } from "react";

import "./style.css";
import Table from "./Table";
import Login from './Components/Auth/Login';

import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import Sidebar from "./Components/Layouts/Sidebar";
import Header from "./Components/Layouts/Header";
// import "primeicons/primeicons.css";   
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PATH_NAME } from "./Components/Utils/PathName";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";

export default function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path={PATH_NAME.LOGIN} element={<Login />} />
          <Route path={PATH_NAME.DASHBOARD} element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
