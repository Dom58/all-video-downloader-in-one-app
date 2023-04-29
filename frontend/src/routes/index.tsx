import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "pages/Errors/NotFound";
import Home from "pages/Home/Home";

const AllRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AllRoutes;
