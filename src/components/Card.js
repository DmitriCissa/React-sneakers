import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addItem, cartSelector } from "../redux/slices/cartSlice";

const Card = ({ id, price, name, image }) => {
  const dispatch = useDispatch();

  const onClickAddItem = () => {
    const item = {
      id,
      name,
      price,
      image,
    };
    dispatch(addItem(item));
  };

  const [addToCart, setAddToCart] = useState(false);

  const addItemHandler = () => {
    setAddToCart(true);
    onClickAddItem();
  };

  const [addToLiked, setAddToLiked] = useState(false);
  const addToLikedHandler = () => {
    setAddToLiked(true);
  };

  return (
    <div className="content-body__card">
      <div className="img-wrapper">
        <button onClick={addToLikedHandler}>
          {!addToLiked ? (
            <img src="/img/heart-item.svg" alt="heart" />
          ) : (
            <img src="/img/pink-heart.svg" alt="heart" />
          )}
        </button>
        <img src={image} alt="sneakers" />
      </div>
      <p>{name}</p>
      <div className="content-body__price">
        <div>
          <p>цена:</p>
          <span>{price} руб.</span>
        </div>
        <button onClick={addItemHandler}>
          {!addToCart ? (
            <img src="/img/plus.svg" alt="plus" />
          ) : (
            <img src="/img/tick.svg" alt="tick" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
