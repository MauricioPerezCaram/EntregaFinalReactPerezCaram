import React, { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  const handleAgregar = () => {
    console.log({ ...item, cantidad });
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <h3 className="titulo">{item.titulo}</h3>
        <p className="descripcion">{item.detalle}</p>
        <p className="categoria">Categoría: {item.categoria}</p>
        <p className="descripcion">Stock {item.stock}</p>
        <p className="precio">$ {item.precio}</p>
        <ItemCount
          cantidad={cantidad}
          handleSumar={handleSumar}
          handleRestar={handleRestar}
          handleAgregar={handleAgregar}
        />
      </div>
    </div>
  );
};

export default ItemDetail;