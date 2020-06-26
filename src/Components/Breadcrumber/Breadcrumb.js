import React from 'react';

import "./Breadcrumb.css";
import {Link} from "react-router-dom";

function Breadcrumb(props) {
  return (
    <ul className="breadcrumb">
      {props.items.map((item, index) =>
        <li key={index}>
          <Link to={item.to}>
            <div className="breadcrumb__item">{item.label}</div>
            <span className="breadcrumb__arrow">>></span>
          </Link>
        </li>)}
    </ul>
  );
}

export default Breadcrumb;
