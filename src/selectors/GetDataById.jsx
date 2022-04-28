import { useState } from "react";

const GetDataById = (id) => {
  const url =
    "https://my-json-server.typicode.com/karvaroz/starwars-db/results";

  const [data, setData] = useState([]);

  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));

  return data;
};

export default GetDataById;
