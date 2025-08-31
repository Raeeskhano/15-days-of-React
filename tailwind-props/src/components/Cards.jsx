import React from "react";

const Cards = ({ title }) => {
  return (
    <div className="bg-zinc-800 text-white p-4 rounded-md m-4 w-80">
      <h1 className="tracking-tighter font-semibold">{title}</h1>
      <p className="text-sm mt-2 text-zinc-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        architecto voluptates corrupti impedit atque. Temporibus vitae optio
        iure porro ipsam sunt rerum odit sit fuga nihil, quod delectus enim
        voluptas.
      </p>
    </div>
  );
};

export default Cards;
