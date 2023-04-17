import React from "react";

const Cart = () => {
  return (
    <div className="overlay">
      <div className="cart">
        <div className="cart-close">
          <h3>Корзина</h3>
          <button>
            <img src="/img/remove.svg" alt="close" />
          </button>
        </div>
        <div className="cart-list">
          <div className="item">
            <div className="card">
              <img src="/img/sneakers/sneakers_1.jpg" />
              <div className="card-info">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <span>12 999 руб.</span>
              </div>
              <button>
                <img src="/img/remove.svg" alt="remove" />
              </button>
            </div>
          </div>
        </div>
        <div className="cart-total-price">
          <div>
            <ul className="price-list">
              <li className="price-list__item">
                <p>Итого:</p>
                <div></div>
                <b>21 324 руб.</b>
              </li>
              <li className="price-list__item">
                <p>Налог 5%</p>
                <div></div>
                <b>1024 руб.</b>
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
