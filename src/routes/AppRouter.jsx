import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListData from "../components/ListData";
import NavBar from "../components/NavBar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ListData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
