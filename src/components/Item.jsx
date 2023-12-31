import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="producto">
      <h4>{producto.nombre}</h4>
      <img src={producto.imagen} alt="producto" />
      <p>Precio: $ {producto.precio}</p>
      <p>Categoría: {producto.categoria}</p>
      <p>En stock: {producto.stock}</p>
      <Link className="ver-mas" to={`/item/${producto.id}`}>
        Ver más
      </Link>
    </div>
  );
};

export default Item;
