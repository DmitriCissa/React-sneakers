import React from "react";
import Subheader from "../components/Subheader";

const Purchases = () => {
  return (
    <div className="purchases">
      <Subheader
        title="Мои покупки"
        img="/img/smiles/purchases-empty.png"
        emptyTitle="У вас нет заказов"
        info="Чтобы оформить заказ вернитесь на главную страницу магазина."
      />
    </div>
  );
};

export default Purchases;
