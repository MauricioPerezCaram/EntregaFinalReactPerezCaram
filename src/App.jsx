import { useState } from "react";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext";

function App() {

const [carrito, setCarrito] = useState ([]);

const agregarAlCarrito = (item, cantidad) => {
  const itemAgregado = {...item, cantidad};

  const nuevoCarrito = [...carrito];
  const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)


  if (estaEnElCarrito) {
    estaEnElCarrito.cantidad += cantidad;
  } 
  else {
    nuevoCarrito.push(itemAgregado)    
  }
  setCarrito(nuevoCarrito);


};

  return (
    <div>
            <CartContext.Provider value={{carrito, agregarAlCarrito}}>

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