import React from 'react';
import './Layout.css';
function Header() {
  return (
    <div className="sidebar-header d-flex justify-content-between  align-items-center w-100">
      <div className="t-dropdown position-relative">
        <p className="text-dropdown mb-0 ml-4">Text</p>
        <div className="dropdown-content position-absolute" style={{ left: '0' }}>
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
        </div>
      </div>
      <div
        className="d-flex justify-content-between  align-items-center "
        style={{ width: "101px" }}
      >
        <i className="fa fa-bell" aria-hidden="true"></i>
        <div className="t-dropdown float-right ml-0 position-relative" >
          <div className="mb-0 mr-3">
            <span className="user">S</span>
            <span className="text-dropdown "></span>
          </div>
          <div className="dropdown-content position-absolute" style={{ right: '0' }}>
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header