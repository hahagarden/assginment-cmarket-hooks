import React from "react";
import Item from "../components/Item";

function ItemListContainer({ items, cartItems, setCartItems }) {
  const handleClick = (event, id) => {
    const newCartItems = cartItems.slice();
    if (newCartItems.filter((item) => item.itemId === id).length === 0) newCartItems.push({ itemId: id, quantity: 1 });
    else newCartItems.filter((item) => item.itemId === id)[0].quantity++;
    setCartItems(newCartItems);
  };

  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
        {items.map((item, idx) => (
          <Item item={item} key={idx} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
