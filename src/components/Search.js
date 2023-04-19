import React from "react";

const Search = () => {
  return (
    <div className="content-header">
      <h2 className="content-header__title">Все кроссовки</h2>
      <div className="content-header__search">
        <img src="/img/search.svg" alt="search" className="search-icon"></img>
        <input className="content-header__input" placeholder="Поиск..."></input>
      </div>
    </div>
  );
};

export default Search;
