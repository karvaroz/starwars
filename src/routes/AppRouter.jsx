import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import ListData from "../components/ListData";
import NavBar from "../components/NavBar";
import SearchData from "../components/SearchData";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ListData />} />
        <Route path="/detail/:id" element={<DetailCard />} />
        <Route path="/search" element={<SearchData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
