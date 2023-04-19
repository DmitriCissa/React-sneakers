import Header from "./components/Header";

import Purchases from "./pages/Purchases";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <section className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/purchases" element={<Purchases />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
