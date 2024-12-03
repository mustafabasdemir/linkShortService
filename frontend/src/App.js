import React, { useState } from "react";
import AppRoutes from "./routes"; 
import MainContext from "./contexts/MainContext";

function App() {
  const [items, setItems] = useState([]);
  const [itemLoading, setItemLoading] = useState(false);

  return <MainContext.Provider
  value={{
    items, setItems,
    itemLoading, setItemLoading
  }}
>
   <AppRoutes />
   </MainContext.Provider>
}

export default App;