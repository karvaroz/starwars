import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import GetDataById from "../selectors/GetDataById";

const DetailCard = () => {
  const navigate = useNavigate();
  // window.location.reload(true);
  const handleReturn = () => {
    navigate(-1);
  };

  const idDetail = useParams();

  const item = GetDataById(idDetail.id);

  const { id, name, image, description } = item;

  return (
    <section className="text-gray-200 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center shadow-lg border border-amber-200"
          alt="hero"
          src={image}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-amber-500">
            <strong>
              Name: {name} - ID: {id}{" "}
            </strong>
          </h1>
          <p className="mb-8 leading-relaxed">
            <strong>Description: </strong>
            {description}
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleReturn}
              className="inline-flex text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded text-lg"
            >
              Regresar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCard;
