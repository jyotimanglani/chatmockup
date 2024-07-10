import React from "react";
import CodeImg from "./assets/code.jpeg";
import StockImg from "./assets/stocks.jpeg";
import RecipeImg from "./assets/recipe.jpeg";
import TripImg from "./assets/trip.jpeg";
import Card from "./Card";
const Body = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="">
        <Card
          image={TripImg}
          title="Plan a Trip"
          description="Lorem ipsum dolor sit amet consectetur."
        />
        <Card
          image={CodeImg}
          title="Plan a Trip"
          description="Lorem ipsum dolor sit amet consectetur."
        />
      </div>
      <div>
        <Card
          image={RecipeImg}
          title="Plan a Trip"
          description="Lorem ipsum dolor sit amet consectetur."
        />
        <Card
          image={StockImg}
          title="Plan a Trip"
          description="Lorem ipsum dolor sit amet consectetur."
        />
      </div>
    </div>
  );
};

export default Body;
