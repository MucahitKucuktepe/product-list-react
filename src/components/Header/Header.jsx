import React from "react";
import { categories } from "../../helper/data";
import "./Header.scss"

const Header = () => {
  console.log(categories);
  return (
    <div className="title">
      <h1>Products List</h1>
      {categories.map((item) => (
        <div className="btn-item" key={item}>
          <button>{item}</button>
        </div>
      ))}
    </div>
  );
};

export default Header;
