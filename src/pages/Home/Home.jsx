import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../component/Header/Header";
import Exploremenu from "../../component/exploremenu/exploremenu";
import FoodDisplay from "../../component/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
