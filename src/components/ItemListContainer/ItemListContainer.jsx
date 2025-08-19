import React, { useEffect, useState } from "react";
import { getProductos } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let live = true;
    (async () => {
      try {
        setLoading(true);
        const data = await getProductos();
        if (live) setProductos(data);
      } catch (e) {
        if (live) setError(e.message || "error al cargar productos");
      } finally {
        if (live) setLoading(false);
      }
    })();
    return () => {
      live = false;
    };
  }, []);

  if (loading) return <p className="tenue">cargando productos…</p>;
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;

  return <ItemList productos={productos} />;
};

export default ItemListContainer;
