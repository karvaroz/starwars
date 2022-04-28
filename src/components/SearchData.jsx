import React, { useEffect, useState } from "react";
import axios from "axios";
import CardData from "./CardData";

const SearchData = () => {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get(`https://my-json-server.typicode.com/karvaroz/starwars-db/results`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item.name)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <input
            onChange={(e) => searchItems(e.target.value)}
            type="search"
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="search"
            placeholder="Search ... "
          />
        </div>
      </div>

      <div className="flex justify-center">
        {searchInput.length > 1 ? (
          filteredResults.map((item) => {
            // return <CardData item={item.name} key={item.id} />;
            return (
              <div
                key={item.id}
                className="flex bg-white shadow-md my-16 mx-10 p-6 rounded
                  border-l-4 border-amber-500 border-solid"
              >
                <div>
                  <img
                    className="" 
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="flex flex-col ml-4">
                  <h2 className="font-bold text-lg my-2">{item.name}</h2>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="text-slate-100">BUSCAR...</h1>
        )}
      </div>
    </>
  );
};

export default SearchData;
