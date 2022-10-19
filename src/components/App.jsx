import {Routes, Route} from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Homepage } from "./pages/Homepage/Homepage";
import { Search } from "./pages/Search/Search";
import React from "react";

export const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Homepage/>}/>
    <Route path="/search" element={<Search/>}/>
    </Route>
   </Routes>
  );
};
