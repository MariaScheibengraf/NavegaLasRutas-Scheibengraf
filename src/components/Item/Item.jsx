import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const formatoARS = (n) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(Number(n));

const toSlug = (nombre) =>
  nombre.toLowerCase().includes("monstera") ? "monstera"
  : nombre.toLowerCase().includes("sansevieria") ? "sansevieria"
  : nombre.toLowerCase().includes("potus") ? "potus"
  : "ficus";

const Item = ({ id, nombre, precio, imagen }) => {
  return (
    <article className="card">
      <img className="card__img" src={imagen} alt={nombre} />
      <div className="card__body">
        <h3 className="card__title">{nombre}</h3>
        <p className="card__price">{formatoARS(precio)}</p>
        <div className="card__actions">
          <button type="button">Agregar al carrito</button>
          <Link to={`/producto/${toSlug(nombre)}`} className="btn-sec">
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Item;
