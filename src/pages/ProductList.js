import ProductItem from '../components/ProductItem';
import { setGranhandItem } from '../assets';
import SideMenu from '../components/SideMenu';

function ProductList() {
  const GranhandItems = setGranhandItem();

  return (
    <div className="main">
      <SideMenu />
      <div className="mainBox">
        <div className="topBox">
          <p className="num">
            Body <span>14</span>
          </p>
          <div className="price">
            <button>낮은 가격 순</button>
            <button>높은 가격 순</button>
            <button>판매 순</button>
          </div>
        </div>

        <div className="main-img">
          {GranhandItems.map(item => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
