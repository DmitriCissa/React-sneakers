import React, { useEffect, useState } from "react";

const Card = ({ price, name, image }) => {
  const [addToCart, setAddToCart] = useState(false);
  const addItemHandler = () => {
    setAddToCart(!addToCart);
  };

  const [addToLiked, setAddToLiked] = useState(false);
  const addToLikedHandler = () => {
    setAddToLiked(!addToLiked);
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
          <span>{price}</span>
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
