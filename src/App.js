import { Route, Routes } from "react-router-dom";
import React from 'react'

import Main from './pages/Main'
import Wishlist from './pages/Wishlist'
import AppContext from "./context/AppContext";


function App() {
  return (
    <AppContext>
      <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>
    </AppContext>

  );
}

export default App;
