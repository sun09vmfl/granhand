import { useEffect, useState } from 'react';
import { getCart, delWishlist } from '../assets';
import '../styles/cart.scss';
import ProductItem from '../components/ProductItem';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

function Cart() {
  const [product, setProduct] = useState([]);
  const handleDelete = delitem => {
    delWishlist(delitem);
    // const nextProduct = getWishlist();
    setProduct([]);
  };

  useEffect(() => {
    const nextProduct = getCart();
    setProduct(nextProduct);
  }, []);

  return (
    <>
      <div className="cart">
        <h2>Cart</h2>
        <p>*배송은 2-5일 정도 소요되며 택배사의 상황에 따라 지연될 수 있습니다. Blotter Card는 우편 발송으로 영업일 기준 5일 이상 소요됩니다.</p>
        {product.length === 0 ? (
          <>
            <div className="basket">
              <ul className="tableTop">
                <li>상품 정보</li>
                <li>수량</li>
                <li>주문 금액</li>
                <li>배송정보</li>
              </ul>
              <ul className="empty">
                <li className="emptyBasket">장바구니가 비어 있습니다. </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <ul className="tableTop">
              <li>체크</li>
              <li>상품 정보</li>
              <li>수량</li>
              <li>주문 금액</li>
              <li>배송정보</li>
            </ul>

            <ul>
              {product.map(item => (
                <li key={item.id}>
                  <CartItem item={item} />
                </li>
              ))}
            </ul>
            <button onClick={() => handleDelete()}>선택 상품 삭제하기</button>
          </>
        )}
        <div className="goShop">
          <Link to="/">쇼핑하러 가기</Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
