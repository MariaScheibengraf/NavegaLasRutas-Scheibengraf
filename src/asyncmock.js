// simple source of truth used by the grid
import monsteraImg from "./assets/Monstera.jpg";
import sansevieriaImg from "./assets/sansevieria.jpg";
import potusImg from "./assets/Potus.jpg";
import ficusImg from "./assets/ficus.jpg";

export const productos = [
  { id: 1, nombre: "Monstera deliciosa", precio: 39000, imagen: monsteraImg },
  { id: 2, nombre: "Sansevieria (Lengua de suegra)", precio: 45000, imagen: sansevieriaImg },
  { id: 3, nombre: "Potus", precio: 28000, imagen: potusImg },
  { id: 4, nombre: "Ficus lyrata (Higuera lira)", precio: 54000, imagen: ficusImg }
];

// helpers the grid may use
export const getProductos = () =>
  new Promise(resolve => setTimeout(() => resolve(productos), 1000));
