import React from "react";

const ProductCard = ({ title, price, description, image, rating }) => {
  const { rate, count } = rating;
  return (
    <div className="card">
      <div className="price">
        <h3>{price} $</h3>
        <h5>
          {rate} {count}
        </h5>
      </div>
      <img src={image} alt={title} />
      <div className="card__over">
        <h2>{title}</h2>
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
