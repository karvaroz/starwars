import { items } from "../data/data";


const GetDataById = (id) => {
  return items.find((item) => item.id === id);
};

export default GetDataById;
