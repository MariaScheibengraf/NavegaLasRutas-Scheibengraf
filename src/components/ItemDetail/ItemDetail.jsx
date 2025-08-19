import React from "react";
import "./ItemDetail.css";

const formatoARS = (n) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(n);

const ItemDetail = ({ id, nombre, precio, imagen, descripcion, onClose }) => {
  if (!id) return null;

  return (
    <article className="item-detail">
      <img className="item-detail__img" src={imagen} alt={nombre} />
      <div>
        <h2 className="item-detail__title">{nombre}</h2>

        {descripcion && (
          <p className="item-detail__desc">{descripcion}</p>
        )}

        <p className="item-detail__price">{formatoARS(precio)}</p>

        <div className="item-detail__actions">
          <button type="button" className="btn btn--primary">
            Agregar al carrito
          </button>

          <button
            type="button"
            className="btn btn--secondary"
            onClick={onClose}
          >
            cerrar
          </button>
        </div>
      </div>
    </article>
  );
};

export default ItemDetail;
