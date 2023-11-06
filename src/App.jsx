import { useState } from "react";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext";

function App() {

const [carrito, setCarrito] = useState ([]);

  return (
    <div>
            <CartContext.Provider value={{carrito, setCarrito}}>

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/:categoria" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
      </CartContext.Provider>

    </div>
  );
}

export default App;