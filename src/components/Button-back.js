import React from "react";

import { Link } from "react-router-dom";

const ButtonBack = () => {
  return (
    <button>
      <Link to="..">
        <img src="/img/arrow-reverse.svg" alt="arrow" />
        Вернуться назад
      </Link>
    </button>
  );
};

export default ButtonBack;
