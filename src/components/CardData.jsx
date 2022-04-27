import React from "react";

const CardData = ({ id, name, image}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-amber-400 p-4 shadow rounded-lg">
      <div className="inline-flex shadow-lg border border-gray-200  overflow-hidden h-50 w-50">
        <img src={image} alt="character-starwars" className="h-full w-full" />
      </div>
      <h2 className="mt-4 font-bold text-2xl text-slate-100">
        {name} - ID: {id}{" "}
      </h2>
    </div>
  );
};

export default CardData;
