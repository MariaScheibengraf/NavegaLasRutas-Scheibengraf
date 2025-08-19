// src/App.jsx
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import GanadoresSorteo from "./components/JsonPlaceHolder/GanadoresSorteo";

import Monstera from "./components/Monstera/Monstera";
import Sansevieria from "./components/Sansevieria/Sansevieria";
import Potus from "./components/Potus/Potus";
import Ficus from "./components/Ficus/Ficus";
import { productos } from "./asyncmock";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (qty = 1) => {
    const n = Number.isFinite(qty) ? qty : 1;
    setCartCount((c) => c + Math.max(0, n));
  };

  const homeItems = [
    { key: "monstera", to: "/monstera" },
    { key: "sansevieria", to: "/sansevieria" },
    { key: "potus", to: "/potus" },
    { key: "ficus", to: "/ficus" },
  ];

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar cartCount={cartCount} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h2 className="titulo-seccion">
                    Bienvenid@ a VivaVerde. Elegí tus plantas favoritas 🌿
                  </h2>

                  <ul className="homegrid">
                    {homeItems.map(({ key, to }) => {
                      const p = productos.find((x) =>
                        x.nombre.toLowerCase().includes(key)
                      );
                      if (!p) return null;
                      return (
                        <li className="homecard" key={key}>
                          <img className="homecard__img" src={p.imagen} alt={p.nombre} />
                          <div className="homecard__body">
                            <h3 className="homecard__title">{p.nombre}</h3>
                            <Link className="btn btn--primary" to={to}>
                              ver detalles
                            </Link>
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <GanadoresSorteo />
                </>
              }
            />

            <Route path="/monstera" element={<Monstera onAddToCart={handleAddToCart} />} />
            <Route path="/sansevieria" element={<Sansevieria onAddToCart={handleAddToCart} />} />
            <Route path="/potus" element={<Potus onAddToCart={handleAddToCart} />} />
            <Route path="/ficus" element={<Ficus onAddToCart={handleAddToCart} />} />

            <Route
              path="/sorteo"
              element={
                <>
                  <h2 className="titulo-seccion">Ganadores de nuestro sorteo – agosto 2025</h2>
                  <GanadoresSorteo />
                </>
              }
            />

            <Route
              path="*"
              element={
                <div style={{ textAlign: "center", padding: 24 }}>
                  <h2>Página no encontrada</h2>
                  <Link to="/">Volver al inicio</Link>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
