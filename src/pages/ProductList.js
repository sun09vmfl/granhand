import ProductItem from '../components/ProductItem';
import { setGranhandItem } from '../assets';
import SideMenu from '../components/SideMenu';

function ProductList() {
  const GranhandItems = setGranhandItem();

  return (
    <div className="main">
      <p className="num">
        Body <span>14</span>
      </p>
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
