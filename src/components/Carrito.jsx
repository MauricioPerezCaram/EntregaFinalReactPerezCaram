import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom/dist";

function Carrito() {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="checkout">
      <h1>Productos agregados al carrito</h1>
      {carrito.length > 0 ? (
        carrito.map((prod) => (
          <div key={prod.id} className="producto">
            <h3>{prod.nombre}</h3>
            <img src={prod.imagen} alt="producto" />
            <p>$ {prod.precio}</p>
            <p>Cantidad de productos seleccionados: {prod.cantidad}</p>
            <p>Total: $ {prod.precio * prod.cantidad}</p>
          </div>
        ))
      ) : (
        <h2>No has agregado productos al carrito aún</h2>
      )}

      {carrito.length > 0 && (
        <>
          <h2>Total agregado al carrito: $ {precioTotal()}</h2>
          <button onClick={handleVaciar} className="agregar-al-carrito">
            Vaciar carrito
          </button>
          <Link to="/checkout" className="agregar-al-carrito">
            Finalizar compra
          </Link>
        </>
      )}
    </div>
  );
}

export default Carrito;
