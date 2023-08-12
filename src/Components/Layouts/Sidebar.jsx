import React, { useState } from 'react'
import './Layout.css';

function Sidebar() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={toggle ? "sidebar left" : "sidebar fliph left"}>
      <div className="bar-btn position-absolute text-right"> </div>
      <ul className="list-sidebar bg-default list-unstyled">
        <li>

          {toggle ? (
            <a

              className=" nav-link d-flex justify-content-end align-items-center"
              onClick={() => setToggle(!toggle)}
            >
              <i className="fa fa-angle-double-left"></i>
            </a>
          ) : (
            <a

              className=" nav-link d-flex justify-content-end align-items-center"
              onClick={() => setToggle(!toggle)}
            >
              <i className="fa fa-angle-double-right"></i>
            </a>
          )}
        </li>
        <li>

          <a className="collapsed active nav-link">

            <i className="fa fa-th-large"></i>
            <span className="nav-label"> Item 1</span>
          </a>
        </li>
        <li>

          <a className="nav-link">
            <i className="fa fa-book"></i>
            <span className="nav-label">Item 2</span>
          </a>
        </li>
        <li>

          <a className="nav-link">
            <i className="fa fa-book"></i>
            <span className="nav-label">Item 3</span>
          </a>
        </li>
        <li>

          <a className="nav-link">
            <i className="fa fa-user"></i>
            <span className="nav-label">Item 4</span>
          </a>
        </li>
        <li>

          <a className="nav-link">
            <i className="fa fa-home"></i>
            <span className="nav-label">Item 5 </span>
          </a>
        </li>
        <li>

          <a>
            <i className="fa fa-credit-card-alt"></i>
            <span className="nav-label">Item 6 </span>
          </a>
        </li>
        <li>

          <a>
            <i className="fa fa-file-text"></i>
            <span className="nav-label">Item 7 </span>
          </a>
        </li>
        <li>

          <a>
            <i className="fa fa-file-video-o"></i>
            <span className="nav-label">Item 8 </span>
          </a>
        </li>
        <li>

          <a>
            <i className="fa fa-birthday-cake"></i>
            <span className="nav-label">Item 9 </span>
          </a>
        </li>
        <li>

          <a>
            <i className="fa fa-users"></i>
            <span className="nav-label">Item 10 </span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar