import React, { useState } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartSelector } from "../redux/slices/cartSlice";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(!showCart);
  };

  const { items, totalPrice } = useSelector(cartSelector);
  console.log(items);
  return (
    <section className="header">
      {showCart ? <Cart showCart onCloseCart={setShowCart} /> : ""}

      <header>
        <div className="header-left">
          <Link to="/">
            <img src="/img/logo.svg" alt="logo" />
          </Link>
          <div className="header-left__info">
            <h3 className="header-left__title">React sneakers</h3>
            <p className="header-left__description">Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="header-right">
          <ul className="header-right__list">
            <li>
              <button onClick={showCartHandler}>
                <img src="/img/cart.svg" alt="cart" />
                <span>{totalPrice} руб.</span>
              </button>
            </li>
            <li>
              <Link to="/wishlist">
                <img src="/img/heart.svg" alt="wishlist" />
              </Link>
            </li>
            <li>
              <Link to="/purchases">
                <img src="/img/profile.svg" alt="profile" />
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Header;
