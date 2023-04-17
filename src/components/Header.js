import React, { useState } from "react";
import Cart from "./Cart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(!showCart);
  };

  console.log(showCart);

  return (
    <section className="header">
      {showCart ? <Cart></Cart> : ""}

      <header>
        <div className="header-left">
          <a href="#">
            <img src="/img/logo.svg" alt="logo" />
          </a>
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
                <span>1205 руб.</span>
              </button>
            </li>
            <li>
              <a href="#">
                <img src="/img/heart.svg" alt="wishlist" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/profile.svg" alt="profile" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Header;
