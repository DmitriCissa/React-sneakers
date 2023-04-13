function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="cart">
          <h3>Корзина</h3>
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
            <div className="item">
              <div className="card">
                <img src="/img/sneakers/sneakers_2.jpg" />
                <div className="card-info">
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <span>12 999 руб.</span>
                </div>
                <button>
                  <img src="/img/remove.svg" alt="remove" />
                </button>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img src="/img/sneakers/sneakers_3.jpg" />
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

      <section className="header">
        <header>
          <div className="header-left">
            <a href="#">
              <img src="/img/logo.svg" alt="logo" />
            </a>
            <div className="header-left__info">
              <h3 className="header-left__title">React sneakers</h3>
              <p className="header-left__description">
                Магазин лучших кроссовок
              </p>
            </div>
          </div>
          <div className="header-right">
            <ul className="header-right__list">
              <li>
                <a href="#">
                  <img src="/img/cart.svg" alt="cart" />
                  <span>1205 руб.</span>
                </a>
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
      <section className="content">
        <div className="content-header">
          <h2 className="content-header__title">Все кроссовки</h2>
          <div className="content-header__search">
            <img
              src="/img/search.svg"
              alt="search"
              className="search-icon"
            ></img>
            <input
              className="content-header__input"
              placeholder="Поиск..."
            ></input>
          </div>
        </div>

        <div className="content-body">
          <div className="content-body__card">
            <div className="img-wrapper">
              <button>
                <img src="/img/heart-item.svg" alt="plus" />
              </button>
              <img src="/img/sneakers/sneakers_1.jpg" alt="sneakers" />
            </div>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="content-body__price">
              <div>
                <p>цена:</p>
                <span>11 999 руб.</span>
              </div>
              <button>
                <img src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="content-body__card">
            <div className="img-wrapper">
              <button>
                <img src="/img/heart-item.svg" alt="plus" />
              </button>
              <img src="/img/sneakers/sneakers_2.jpg" alt="sneakers" />
            </div>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="content-body__price">
              <div>
                <p>цена:</p>
                <span>12 999 руб.</span>
              </div>
              <button>
                <img src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="content-body__card">
            <div className="img-wrapper">
              <button>
                <img src="/img/heart-item.svg" alt="plus" />
              </button>
              <img src="/img/sneakers/sneakers_3.jpg" alt="sneakers" />
            </div>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="content-body__price">
              <div>
                <p>цена:</p>
                <span>14 999 руб.</span>
              </div>
              <button>
                <img src="/img/tick.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="content-body__card">
            <div className="img-wrapper">
              <button>
                <img src="/img/pink-heart.svg" alt="plus" />
              </button>
              <img src="/img/sneakers/sneakers_4.jpg" alt="sneakers" />
            </div>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="content-body__price">
              <div>
                <p>цена:</p>
                <span>2 999 руб.</span>
              </div>
              <button>
                <img src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
