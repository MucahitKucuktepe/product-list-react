import React from "react";
import "./Products.scss";
import { products } from "../../helper/data";
import ProductCard from "./ProductCard";

const ProductList = ({ search, click, refresh }) => {
  console.log(search);
  const filtered = (search, click) => {
    const newArr =
      click === "all"
        ? products
        : products.filter(
            (item) =>
              item.category.toLowerCase() === click &&
              item.title.toLowerCase().includes(search.toLowerCase())
          );
          return newArr
  };
  const filteredProducts= refresh ? products.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase())) : filtered(search,click)
  return (
    <div className="products-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
