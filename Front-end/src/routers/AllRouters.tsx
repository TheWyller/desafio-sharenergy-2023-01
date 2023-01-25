import { Route, Routes } from "react-router-dom";
import CreateClient from "../pages/CreateClient";

import Home from "../pages/Home";
import HTTPCat from "../pages/HTTPCat";
import Login from "../pages/Login";
import MyClients from "../pages/MyClients";
import NotFound from "../pages/NotFound";
import RandomDog from "../pages/RandomDog";
import SignUp from "../pages/SignUp";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/clients" element={<MyClients />} />
      <Route path="/newclient" element={<CreateClient />} />
      <Route path="/httpcat" element={<HTTPCat />} />
      <Route path="/randomdog" element={<RandomDog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;
