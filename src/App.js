import React, { useState } from "react";

import "./style.css";
import Table from "./Table";
export default function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="main d-flex flex-column ">
        <aside className="d-flex w-100">

          {/* sidebar Start */}

          <div className={toggle ? "sidebar left" : "sidebar fliph left"}>
            <div className="bar-btn position-absolute text-right"> </div>
            <ul className="list-sidebar bg-default list-unstyled">
              <li>
                
                {toggle ? (
                  <a
                    href="#"
                    className=" nav-link d-flex justify-content-end align-items-center"
                    onClick={() => setToggle(!toggle)}
                  >
                    <i className="fa fa-angle-double-left"></i>
                  </a>
                ) : (
                  <a
                    href="#"
                    className=" nav-link d-flex justify-content-end align-items-center"
                    onClick={() => setToggle(!toggle)}
                  >
                    <i className="fa fa-angle-double-right"></i>
                  </a>
                )}
              </li>
              <li>
                
                <a href="#" className="collapsed active nav-link">
                  
                  <i className="fa fa-th-large"></i>
                  <span className="nav-label"> Item 1</span>
                </a>
              </li>
              <li>
                
                <a href="#" className="nav-link">
                  <i className="fa fa-book"></i>
                  <span className="nav-label">Item 2</span>
                </a>
              </li>
              <li>
                
                <a href="#" className="nav-link">
                  <i className="fa fa-book"></i>
                  <span className="nav-label">Item 3</span>
                </a>
              </li>
              <li>
                
                <a href="" className="nav-link">
                  <i className="fa fa-user"></i>
                  <span className="nav-label">Item 4</span>
                </a>
              </li>
              <li>
                
                <a href="#" className="nav-link">
                  <i className="fa fa-home"></i>
                  <span className="nav-label">Item 5 </span>
                </a>
              </li>
              <li>
                
                <a href="#">
                  <i className="fa fa-credit-card-alt"></i>
                  <span className="nav-label">Item 6 </span>
                </a>
              </li>
              <li>
                
                <a href="#">
                  <i className="fa fa-file-text"></i>
                  <span className="nav-label">Item 7 </span>
                </a>
              </li>
              <li>
                
                <a href="#">
                  <i className="fa fa-file-video-o"></i>
                  <span className="nav-label">Item 8 </span>
                </a>
              </li>
              <li>
                
                <a href="#">
                  <i className="fa fa-birthday-cake"></i>
                  <span className="nav-label">Item 9 </span>
                </a>
              </li>
              <li>
                
                <a href="#">
                  <i className="fa fa-users"></i>
                  <span className="nav-label">Item 10 </span>
                </a>
              </li>
            </ul>
          </div>

          {/* sidebar End */}

          <div className="d-flex w-100 flex-column">

            {/* header statr */}
            <div className="sidebar-header d-flex justify-content-between  align-items-center w-100">
              <div className="t-dropdown position-relative">
                <p className="text-dropdown mb-0 ml-4">Text</p>
                <div className="dropdown-content position-absolute" style={{left:'0'}}>
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
                  <div className="dropdown-content position-absolute" style={{right:'0'}}>
                    <a href="#">Logout</a>
                  </div>
                </div>
              </div>
            </div>
            {/* header End */}

            <div>
              <Table />
            </div>
            
          </div>
        </aside>
      </div>
    </>
  );
}
