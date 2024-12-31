"use client"; /*adds to the user page*/
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button className="btn btn-primary" onClick={() => console.log("Click")}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
