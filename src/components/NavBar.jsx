const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <h1>Apple Store Mendoza</h1>
      </a>
      <ul className="menu">
        <li>
          <a className="menu-link" href="#">
            Inicio
          </a>
        </li>
        <li>
          <a className="menu-link" href="#">
            iPhone
          </a>
        </li>
        <li>
          <a className="menu-link" href="#">
            Mac
          </a>
        </li>
        <li>
          <a className="menu-link" href="#">
            Watch
          </a>
        </li>
        <li>
          <a className="menu-link" href="#">
            Airpod
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
