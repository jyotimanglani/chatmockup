import React from "react";

const Card = (props) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="">
        <img src={props.image} alt="task image" className="h-1/3 w-1/2" />
      </div>
      <div>
        <h1 className="text-lg font-semibold">{props.title}</h1>
        <p className="text-base bg-blue-500">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
