import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import logo from "../../assets/logovivaverde.png";

export default function NavBar({ cartCount = 0 }) {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="ViveVerde logo" />
          </Link>
        </div>

        <ul className="nav-categorias">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/monstera">Monstera</Link></li>
          <li><Link to="/sansevieria">Sansevieria</Link></li>
          <li><Link to="/potus">Potus</Link></li>
          <li><Link to="/ficus">Ficus</Link></li>
          <li><Link to="/sorteo">Ganadores del sorteo</Link></li>
        </ul>

        <CartWidget count={cartCount} />
      </nav>
    </header>
  );
}
