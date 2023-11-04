import { useContext } from "react";
import { Link } from "react-router-dom";

function CartWidget() {
  const { cantidadEnCarrito } = useContext();

  return (
    <div>
      <Link className="menu-link" to="/carrito">
        Carrito
        <span className="numerito"> {cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
}

export default CartWidget;
