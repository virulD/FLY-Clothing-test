import React from "react";
import './products.css'
import data from '../DataBase/db';

const Products = () => {
  return (
    <>
      <section className="card-container">
        {Array.isArray(data) && data.map((product, index) => (
          <div key={index} className="card">
            <img src={product.img} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <div className="rating">
              {product.star}
              <span>{product.reviews}</span>
            </div>
            <p className="price">
              <span className="prev-price">{product.prevPrice}</span>
              <span className="new-price">{product.newPrice}</span>
            </p>
            <p className="company">{product.company}</p>
            <p className="category">{product.category}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Products;