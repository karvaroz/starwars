import React, { useEffect, useState } from "react";

const ListData = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("../data/data.json")
    const data = await response.json();
    return data.results;
  };

  useEffect(() => {
    getData()
    .then(data => setData(data))
  }, [])

  console.log(data);

  return (
    <div className="container m-auto mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
        <div className="inline-flex shadow-lg border border-gray-200  overflow-hidden h-40 w-40">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
            alt=""
            className="h-full w-full"
          />
        </div>
        <h2 className="mt-4 font-bold text-xl">Nombre</h2>
      </div>
    </div>
  );
};

export default ListData;
