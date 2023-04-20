import { React } from "react";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";
import { cartSelector } from "../redux/slices/cartSlice";

const Cart = ({ showCart, onCloseCart, id, name, price, image }) => {
  const { items, totalPrice } = useSelector(cartSelector);

  const taxes = (totalPrice / 100) * 5;
  return (
    <div className="overlay">
      <div className="cart">
        <div className="cart-close">
          <h3>Корзина</h3>
          <button
            onClick={() => {
              onCloseCart(!showCart);
            }}
          >
            <img src="/img/remove.svg" alt="close" />
          </button>
        </div>

        <div className="cart-list">
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <div className="cart-total-price">
          <div>
            <ul className="price-list">
              <li className="price-list__item">
                <p>Итого:</p>
                <div></div>
                <b>{totalPrice + taxes} руб.</b>
              </li>
              <li className="price-list__item">
                <p>Налог 5%</p>
                <div></div>
                <b>{taxes} руб.</b>
              </li>
            </ul>
            <button>
              Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
