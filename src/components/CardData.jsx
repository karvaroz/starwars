import React from "react";
import { useNavigate } from "react-router-dom";

const CardData = ({ id, name, image }) => {
  const navigate = useNavigate();

  const handleClickDetails = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-amber-400 p-4 shadow rounded-lg">
      <div className="inline-flex shadow-lg border border-gray-200  overflow-hidden h-50 w-40">
        <img src={image} alt="character-starwars" className="h-full w-full" />
      </div>
      <h2 className="mt-4 font-bold text-xl text-slate-100 hover:text-amber-600">
        {name} - ID: {id}
      </h2>
      <div className="flex justify-center">
        <button
          onClick={handleClickDetails || ""}
          className="inline-flex text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded text-lg mt-5"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default CardData;
