import React, { useState } from 'react';
import './Layout.css';

const sidebarItems = [
  { icon: 'fa fa-th-large', label: 'Item 1' },
  { icon: 'fa fa-book', label: 'Item 2' },
  { icon: 'fa fa-book', label: 'Item 3' },
  { icon: 'fa fa-user', label: 'Item 4' },
  { icon: 'fa fa-home', label: 'Item 5' },
  { icon: 'fa fa-credit-card-alt', label: 'Item 6' },
  { icon: 'fa fa-file-text', label: 'Item 7' },
  { icon: 'fa fa-file-video-o', label: 'Item 8' },
  { icon: 'fa fa-birthday-cake', label: 'Item 9' },
  { icon: 'fa fa-users', label: 'Item 10' }
];

function Sidebar() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className={toggle ? "sidebar h-100 bg-bluegray-900 left" : "sidebar bg-bluegray-900 h-100 fliph left"}>
      <ul>
        <li>
          <a className="p-3 d-flex justify-content-end align-items-center cursor-pointer" onClick={() => setToggle(!toggle)}>
            <i className={`fa ${toggle ? 'fa-angle-double-left' : 'fa-angle-double-right'}`}></i>
          </a>
        </li>
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <a className="p-3 text-base d-block  cursor-pointer">
              <i className={item.icon}></i>
              <span className="nav-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
