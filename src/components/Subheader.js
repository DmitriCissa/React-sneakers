import React from "react";
import ButtonBack from "./Button-back";
import Card from "./Card";
import { Link } from "react-router-dom";

const Subheader = ({ title, img, emptyTitle, info }) => {
  return (
    <div className="purchases">
      <div className="purchases-title">
        <button>
          <Link to="..">
            <img src="/img/back.svg" alt="back" />
          </Link>
        </button>
        <h2>{title}</h2>
      </div>
      <div className="purchases-content">
        <div className="content-body">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      {/* <div className="purchases-empty">
        <img src={img} />
        <h2>{emptyTitle}</h2>
        <p>{info}</p>
        <ButtonBack />
      </div> */}
    </div>
  );
};

export default Subheader;
