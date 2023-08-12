import React, { useState } from 'react';
import './Layout.css';
import { PATH_NAME } from "../Utils/PathName";
import { useNavigate } from 'react-router-dom';
const sidebarItems = [
  { icon: 'fa fa-th-large', label: 'Dashboard', link: PATH_NAME.DASHBOARD },
  { icon: 'fa fa-book', label: 'Product', link: PATH_NAME.PRODUCT },
  { icon: 'fa fa-book', label: 'Pricing', link: PATH_NAME.PRICING },
  { icon: 'fa fa-user', label: 'Item 4', link: PATH_NAME.DASHBOARD },
  { icon: 'fa fa-home', label: 'Item 5', link: PATH_NAME.DASHBOARD },
  { icon: 'fa fa-credit-card-alt', label: 'Item 6', link: PATH_NAME.DASHBOARD },
  { icon: 'fa fa-file-text', label: 'Item 7', link: PATH_NAME.DASHBOARD },
  { icon: 'fa fa-file-video-o', label: 'Item 8', link: PATH_NAME.DASHBOARD },
  { icon: 'fa fa-birthday-cake', label: 'Item 9', link: PATH_NAME.DASHBOARD },
  { icon: 'fa fa-users', label: 'Item 10', link: PATH_NAME.DASHBOARD }
];

function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  return (
    <div className={toggle ? "sidebar h-100 bg-bluegray-900 left" : "sidebar bg-bluegray-900 h-100 fliph left"}>
      <ul className='list-none'>
        <li>
          <a className="p-3 d-flex justify-content-end align-items-center cursor-pointer" onClick={() => setToggle(!toggle)}>
            <i className={`fa ${toggle ? 'fa-angle-double-left' : 'fa-angle-double-right'}`}></i>
          </a>
        </li>
        {sidebarItems.map((item, index) => (
          <li key={index} onClick={()=> navigate(item.link)}>
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
