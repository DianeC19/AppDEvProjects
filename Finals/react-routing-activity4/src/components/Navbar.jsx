import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <button className="nav-button">Home</button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button className="nav-button">About</button>
          </Link>
        </li>
        <li>
          <Link to="/games">
            <button className="nav-button">Games</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}