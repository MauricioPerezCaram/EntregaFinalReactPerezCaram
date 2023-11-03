import React from "react";

const Item = ({ producto }) => {
  return (
    <div className="producto">
      <h4>{producto.nombre}</h4>
      <img src={producto.imagen} />
      <p>Precio: $ {producto.precio}</p>
      <p>Categoría: {producto.categoria}</p>
      <a className="ver-mas" href={`/item/${producto.id}`}>
        Ver más
      </a>
    </div>
  );
};

export default Item;
