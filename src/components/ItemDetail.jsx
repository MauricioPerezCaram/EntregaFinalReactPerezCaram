import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {

  const {carrito, setCarrito} = useContext(CartContext)
  console.log(carrito);
  
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  const handleAgregar = () => {
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