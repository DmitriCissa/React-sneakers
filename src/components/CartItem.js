import React from "react";

import { useDispatch } from "react-redux";
import { removeItem } from "../redux/slices/cartSlice";

const CartItem = ({ id, name, price, image }) => {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className="item">
      <div className="card">
        <img src={image} />
        <div className="card-info">
          <p>{name}</p>
          <span>{price} руб.</span>
        </div>
        <button onClick={onClickRemove}>
          <img src="/img/remove.svg" alt="remove" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
