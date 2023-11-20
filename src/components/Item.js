import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false);

  function addToCart() {
    setCart(cart => !cart);
  }

  const cartLiClass = cart ? "in-cart" : ""; //For list's className - item is in the cart else not in the cart
  const cartBtnClass = cart ? "remove" : "add"; //For button's className - if className is "remove" then purple else "add" is yellow

  /*   If the item is not in the cart, the <button> element's text should read "Add to Cart", and if the item is in the cart, the <button> element's text should read "Remove From Cart".
   */

  return (
    <li className={cartLiClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartBtnClass} onClick={addToCart}>
        {cart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
