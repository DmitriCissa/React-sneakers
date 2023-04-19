import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import ButtonBack from "../components/Button-back";
import Subheader from "../components/Subheader";

const Wishlist = () => {
  return (
    <div className="wishlist">
      <Subheader
        title="Мои закладки"
        img="/img/smiles/wishlist-empty.png"
        emptyTitle="Закладок нет :("
        info="Вы ничего не добавляли в закладки."
      />
    </div>
  );
};

export default Wishlist;
