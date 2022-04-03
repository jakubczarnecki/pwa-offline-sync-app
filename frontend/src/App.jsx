import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/dataContext";
import { UIProvider } from "./context/uiConext";

import LoginPage from "./pages/login/login";
import NotesPage from "./pages/notes/notes";
import NotFoundPage from "./pages/notFound/notFound";
import AuthenticatedRoute from "./util/AuthenticatedRoute";

function App() {
   return (
      <UIProvider>
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
      </UIProvider>
   );
}

export default App;
