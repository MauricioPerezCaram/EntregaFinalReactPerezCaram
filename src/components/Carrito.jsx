import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Carrito() {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h1>Carrito</h1>
      {carrito.length > 0 ? (
        carrito.map((prod) => (
          <div key={prod.id}>
            <h3>{prod.nombre}</h3>
            <p>$ {prod.precio}</p>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Total: $ {prod.precio * prod.cantidad}</p>
          </div>
        ))
      ) : (
        <h2>Agrega algo al carrito</h2>
      )}
      {carrito.length > 0 && (
        <>
          <h2>Total agregado al carrito: $ {precioTotal()}</h2>
          <button onClick={handleVaciar}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
}

export default Carrito;

{
  /* <h2>Total agregado al carrito: $ {precioTotal()}</h2>
<button onClick={handleVaciar}>Vaciar Carrito</button> */
}
