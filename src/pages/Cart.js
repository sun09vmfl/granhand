import { useEffect, useState } from 'react';
import { getWishlist, delWishlist } from '../assets';
import ProductItem from '../components/ProductItem';
import '../styles/cart.scss';

function Cart() {
  const [product, setProduct] = useState([]);
  const handleDelete = delitem => {
    delWishlist(delitem);
    const nextProduct = getWishlist();
    setProduct(nextProduct);
  };

  useEffect(() => {
    const nextProduct = getWishlist();
    setProduct(nextProduct);
  }, []);

  return (
    <>
      <h2>Cart</h2>
      <p>*배송은 2-5일 정도 소요되며 택배사의 상황에 따라 지연될 수 있습니다. Blotter Card는 우편 발송으로 영업일 기준 5일 이상 소요됩니다.</p>
      {product.length === 0 ? (
        <h3>위시리스트가 비었습니다.</h3>
      ) : (
        <ul>
          {product.map(item => (
            <li key={item.id}>
              <ProductItem item={item} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Cart;
