import { useContext } from "react";

function Carrito() {
  const { carrito, precioTotal, vaciarCarrito } = useContext();
  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {carrito.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.nombre}</h3>
          <p>Precio: $ {prod.precio}</p>
          <p>Cantidad agregada al carrito: {prod.cantidad}</p>
          <p>Precio total: ${prod.precio * prod.cantidad} </p>
          <br></br>
        </div>
      ))}

      {carrito.length > 0 ? (
        <div>
          <h2>Total: $ {precioTotal()}</h2>
          <button onClick={handleVaciar}>Vaciar Carrito</button>
        </div>
      ) : (
        <h2>El carrito está vacío</h2>
      )}
    </div>
  );
}

export default Carrito;
