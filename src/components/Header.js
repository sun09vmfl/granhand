import { Link } from 'react-router-dom';

import '../styles/style.scss';
import '../styles/header.scss';

import { FaSistrix } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <div className="top">
        <h1 className="logo">
          <Link to="/">GRANHAND.</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/search">
                <FaSistrix size="14" />
              </Link>
            </li>
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/">Journal</Link>
            </li>
            <li>
              <Link to="/">Wallpaper</Link>
            </li>
            <li>
              <Link to="/">Stores</Link>
            </li>
            <li>
              <Link to="/">Index</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
