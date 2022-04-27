import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListData from "../components/ListData";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
