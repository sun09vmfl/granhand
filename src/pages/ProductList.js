import ProductItem from '../components/ProductItem';
import { setGranhandItem } from '../assets';
import SideMenu from '../components/SideMenu';
import { Link } from 'react-router-dom';

function ProductList() {
  const GranhandItems = setGranhandItem();

  return (
    <div className="main">
      <div className="topBox">
        <p className="num">
          Body <span>14</span>
        </p>
        <div className="price">
          <p>
            <Link to="/">낮은 가격 순</Link>
          </p>
          <p>
            <Link to="/">높은 가격 순</Link>
          </p>
          <p>
            <Link to="/">판매 순</Link>
          </p>
        </div>
      </div>
      <SideMenu />
      <div className="main-img">
        {GranhandItems.map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
