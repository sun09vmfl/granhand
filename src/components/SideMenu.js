import { Link } from 'react-router-dom';
import '../styles/sideMenu.scss';

function SideMenu() {
  return (
    <div className="sticky">
      <nav>
        <ul className="perfume1">
          <li>
            <Link to="/">Perfume</Link>
          </li>
        </ul>

        <ul className="perfume2">
          <li>
            <Link to="/">Signiture</Link>
          </li>
          <li>
            <Link to="/">Perfume</Link>
          </li>
          <li>
            <Link to="/">Multie Perfume</Link>
          </li>
        </ul>

        <ul className="fragrance">
          <li>
            <Link to="/">
              <span>Home Fragrance</span>
            </Link>
          </li>
          <li>
            <Link to="/">Diffuser</Link>
          </li>
          <li>
            <Link to="/">Candle</Link>
          </li>
          <li>
            <Link to="/">Sachet</Link>
          </li>
        </ul>

        <ul className="body fragrance">
          <li>
            <Link to="/">
              <span>Body</span>
            </Link>
          </li>
          <li>
            <Link to="/">Hand Cream</Link>
          </li>
          <li>
            <Link to="/">Hand Wash</Link>
          </li>
        </ul>

        <ul className="fragrance">
          <li>
            <Link to="/">
              <span>Natural</span>
            </Link>
          </li>
          <li>
            <Link to="/">Dropper</Link>
          </li>
          <li>
            <Link to="/">Spray</Link>
          </li>
          <li>
            <Link to="/">Tea</Link>
          </li>
        </ul>

        <ul className="fragrance">
          <li>
            <Link to="/">
              <span>Tools</span>
            </Link>
          </li>
          <li>
            <Link to="/">All</Link>
          </li>
        </ul>

        <ul className="sometime">
          <li>
            <Link to="/">Sometime you win, Sometime you Learn.</Link>
          </li>
        </ul>

        <ul className="fragrance">
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/">Living</Link>
          </li>
          <li>
            <Link to="/">Stationery</Link>
          </li>
          <li>
            <Link to="/">Bag</Link>
          </li>
          <li>
            <Link to="/">Acc</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideMenu;
