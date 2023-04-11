function App() {
  return (
    <div className="wrapper">
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
            <img src="/img/sneakers/sneakers_1.jpg" alt="sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="content-body__price">
              <div>
                <p>цена:</p>
                <span>12 999 руб.</span>
              </div>
              <button>
                <img src="/img/plus.svg" alt="plus"></img>
              </button>
            </div>
          </div>
          <div className="content-body__card">
            <img src="/img/sneakers/sneakers_1.jpg" alt="sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="content-body__price">
              <div>
                <p>цена:</p>
                <span>12 999 руб.</span>
              </div>
              <button>
                <img src="/img/plus.svg" alt="plus"></img>
              </button>
            </div>
          </div>
          <div className="content-body__card">
            <img src="/img/sneakers/sneakers_1.jpg" alt="sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="content-body__price">
              <div>
                <p>цена:</p>
                <span>12 999 руб.</span>
              </div>
              <button>
                <img src="/img/plus.svg" alt="plus"></img>
              </button>
            </div>
          </div>
          <div className="content-body__card">
            <img src="/img/sneakers/sneakers_1.jpg" alt="sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="content-body__price">
              <div>
                <p>цена:</p>
                <span>12 999 руб.</span>
              </div>
              <button>
                <img src="/img/plus.svg" alt="plus"></img>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
