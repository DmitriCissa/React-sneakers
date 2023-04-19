import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Search from "../components/Search";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const [sneakersData, setSneakersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://63f35862864fb1d60014c063.mockapi.io/Sneakers")
      .then((res) => {
        setSneakersData(res.data);
      });
    setIsLoading(false);
  }, []);

  const skeleton = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));
  return (
    <div>
      <Search />
      <div className="content-body">
        {isLoading
          ? skeleton
          : sneakersData.map((obj) => <Card key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
