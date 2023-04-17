import { useState } from "react";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Content from "./components/Content";
import Header from "./components/Header";

const sneakers = [
  {
    price: "2 999 руб.",
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    image: "/img/sneakers/sneakers_1.jpg",
  },
  {
    price: "5 999 руб.",
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    image: "/img/sneakers/sneakers_2.jpg",
  },
  {
    price: "8 999 руб.",
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    image: "/img/sneakers/sneakers_3.jpg",
  },
  {
    price: "3 999 руб.",
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    image: "/img/sneakers/sneakers_4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <section className="content">
        <Content></Content>
        <div className="content-body">
          {sneakers.map((obj) => (
            <Card key={obj.id} {...obj} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
