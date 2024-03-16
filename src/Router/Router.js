import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Detail from "../pages/IdPage";

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/detail/:id" element={<Detail></Detail>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
