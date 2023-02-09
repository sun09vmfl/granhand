import ProductItem from '../components/ProductItem';

import { setGranhandItem } from '../assets';

function ProductList() {
  const GranhandItems = setGranhandItem();

  return (
    <div>
      {GranhandItems.map(item => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProductList;
