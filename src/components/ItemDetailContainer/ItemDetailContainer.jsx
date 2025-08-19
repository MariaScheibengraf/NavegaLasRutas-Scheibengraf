import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();          
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let activo = true;

    (async () => {
      try {
        setCargando(true);
        const data = await getProducto(Number(id));
        if (activo) setProducto(data);
      } catch (e) {
        if (activo) setError(e.message || "error al cargar el item");
      } finally {
        if (activo) setCargando(false);
      }
    })();

    return () => {
      activo = false;
    };
  }, [id]);

  if (cargando) return <p>cargando detalle…</p>;
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;
  if (!producto) return null;

  return <ItemDetail {...producto} />;
};

export default ItemDetailContainer;
