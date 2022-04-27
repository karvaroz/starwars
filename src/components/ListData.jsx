import React, { useEffect, useState } from "react";
import CardData from "./CardData";

const ListData = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/karvaroz/starwars-db/results"
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <div className="container m-auto mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10 mb-4">
      {data.map((item) => (
        <CardData key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListData;
