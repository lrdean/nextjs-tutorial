"use client"; /*adds to the user page*/
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button className="btn btn-primary" onClick={() => console.log("Click")}>
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
