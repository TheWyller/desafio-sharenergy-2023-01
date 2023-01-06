import { Route, Routes } from "react-router-dom";
import CreateContact from "../pages/CreateContact";

import Home from "../pages/Home";
import HTTPCat from "../pages/HTTPCat";
import Login from "../pages/Login";
import MyContacts from "../pages/MyContacts";
import NotFound from "../pages/NotFound";
import RandomDog from "../pages/RandomDog";
import SignUp from "../pages/SignUp";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contacts" element={<MyContacts />} />
      <Route path="/newcontact" element={<CreateContact />} />
      <Route path="/httpcat" element={<HTTPCat />} />
      <Route path="/randomdog" element={<RandomDog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;
