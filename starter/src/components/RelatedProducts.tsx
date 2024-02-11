import React from "react";
import ProductItem from "./ProductItem";
import { RandomProductsProps } from "../interfaces/Interfaces";

const RelatedProducts: React.FC<RandomProductsProps> = ({ randomProducts }) => {
  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex">
            {randomProducts.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
