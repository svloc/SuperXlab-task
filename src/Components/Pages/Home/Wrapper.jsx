import React, { useState } from "react";
import Header from "../../Layouts/Header";
import Sidebar from "../../Layouts/Sidebar";

export default function Wrapper(props) {
  const { children } = props;

  return (
    <div className="flex flex-row h-screen">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="flex-auto overflow-y-auto">
        <div className="sticky-top z-5">
          <Header />
        </div>
        {children}
      </div>
    </div>
  );
}
