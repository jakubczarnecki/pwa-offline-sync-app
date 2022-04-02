import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { dataContext } from "../context/dataContext";

const AuthenticatedRoute = ({ children }) => {
   const location = useLocation();
   const { state } = useContext(dataContext);

   if (!state.username) {
      return <Navigate to="/login" state={{ from: location }} replace />;
   }

   return children;
};

export default AuthenticatedRoute;
