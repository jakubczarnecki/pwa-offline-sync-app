import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { DataProvider } from "./context/dataContext";

import LoginPage from "./pages/login/login";
import NotesPage from "./pages/notes/notes";
import NotFoundPage from "./pages/notFound/notFound";
import AuthenticatedRoute from "./util/AuthenticatedRoute";

function App() {
   axios.defaults.baseURL = "http://localhost:8800/api/";

   return (
      <DataProvider>
         <BrowserRouter>
            <Routes>
               <Route
                  path="/"
                  element={
                     <AuthenticatedRoute>
                        <NotesPage />
                     </AuthenticatedRoute>
                  }
               />
               <Route path="/login" element={<LoginPage />} />
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </BrowserRouter>
      </DataProvider>
   );
}

export default App;
