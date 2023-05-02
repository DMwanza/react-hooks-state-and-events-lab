import React, { useState } from "react";

function Item({ item,toggleInCart }) {
  const{category,name,inCart}=item
  //const [bought,setBought]=useState(inCart)
  return (
    <li className={inCart?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleInCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
