import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom/dist";
import CheckOut from "./CheckOut";

function Carrito() {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h1>Carrito</h1>
      {carrito.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.nombre}</h3>
          <p>$ {prod.precio}</p>
          <p>Cantidad: {prod.cantidad}</p>
          <p>Total: $ {prod.precio * prod.cantidad}</p>
        </div>
      ))}
      {carrito.length > 0 ? (
        <>
          <h2>Total agregado al carrito: $ {precioTotal()}</h2>
          <button onClick={handleVaciar} className="agregar-al-carrito">
            Vaciar carrito
          </button>
          <Link to="/checkout" className="agregar-al-carrito">
            Finalizar compra
          </Link>
        </>
      ) : (
        <h2>Carrito esta vacio</h2>
      )}
    </div>
  );
}

export default Carrito;
