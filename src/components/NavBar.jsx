import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>Apple Store Mendoza</h1>
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/iphone">
            iPhone
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/mac">
            Mac
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/watch">
            Watch
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/airpod">
            Airpod
          </Link>
        </li>
        <li>
          <CartWidget />
        </li>
        <li>
          <img
            src="/logocarrito.png"
            alt="logocarrito"
            width={25}
            to="/carrito"
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
