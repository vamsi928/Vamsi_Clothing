import React from "react";
import "./menu-items.style.scss";
import history from "../../history";

const naviagtePage = (props) => {
  history.push(`${props.linkUrl}`);
};

const MenuItems = (props) => {
  return (
    <div
      className={`${props.size} menu-item`}
      onClick={() => naviagtePage(props)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      />
      <div className="content">
        <div className="title">{props.title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItems;
