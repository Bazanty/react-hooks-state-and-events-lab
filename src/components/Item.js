import React, { useState } from "react";

function Item({ id, name, category }) {
  const [inCart, setInCart] = useState(false); // Track if the item is in the cart

  // Toggle inCart state when the button is clicked
  const handleAddToCart = () => {
    setInCart(prevState => !prevState); // Toggle inCart state
  };

  return (
    <li className={`Item ${inCart ? 'in-cart' : ''}`}>
      <span>{name}</span>
      <span>({category})</span>
      <button onClick={handleAddToCart}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
