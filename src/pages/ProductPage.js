import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { getItemId, addWishlist } from '../assets/';
import { setGranhandItem } from '../assets';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

import '../styles/productpage.scss';

function ProductPage() {
  const [count, setCount] = useState(1);
  const GranhandItems = setGranhandItem();
  const path = process.env.PUBLIC_URL;
  const { itemId } = useParams();
  // 클릭한 제품의 번호의 데이터만 불러오는 함수
  const item = getItemId(itemId);
  const navigate = useNavigate();

  console.log(item);

  if (!item) {
    return <Navigate to="/cart" />;
  }
  const handleAddWishList = () => {
    alert(`장바구니에 저장되었습니다.`);
    addWishlist(item.id);
    navigate('/wishlist');
  };

  // 상세페이지에서 물건 수량 조절
  const handleQuantity = type => {
    if (type === 'plus') {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <div className="sellBox">
        <div className="imgBox">
          <img src={`${path}/images/${item.imgUrl}.jpg`} alt="{item.title}" />
        </div>
        <section className="side">
          <div className="priceBox">
            <h1>{item.title}</h1>
            <p>{item.price}KRW</p>
            <p>{item.des}</p>
            <p>{item.gram}</p>
          </div>

          <div className="shoppingBox">
            <p>쇼핑백</p>
            <select name="shopping">
              <option value="op1">쇼핑백 추가 구매 Small(18x27x9)</option>
              <option value="op2"> + 1,000 </option>
            </select>

            <div className="num">
              <div className="numbering">
                <p>수량</p>
                <div className="numBox">
                  <div className="minus">
                    <FaMinus onClick={() => handleQuantity('minus')} />
                  </div>
                  <div class="count">
                    <span>{count}</span>
                  </div>
                  <div className="plus">
                    <FaPlus onClick={() => handleQuantity('plus')} />
                  </div>
                </div>
              </div>
              <div className="sell">
                <div className="allPrice">
                  <span>총 상품 금액</span>
                </div>
                <div className="allNum">
                  <span className="counting">
                    총 수량 <span>{count}개</span>
                  </span>
                  <span className="counting">
                    {item.price * count}
                    <span>KRW</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="buy">
              <button>구매하기</button>
              <button onClick={handleAddWishList}>장바구니 담기</button>
            </div>
          </div>
        </section>
      </div>

      <section className="info">
        <div className="line"></div>
        <h1>Fragrance Story</h1>
        <p>{item.story}</p>
        <div className="imgBox">
          <img src={`${path}/images/${item.imgUrl2}.jpg`} alt="{item.title}" />
          <img src={`${path}/images/${item.imgUrl3}.jpg`} alt="{item.title}" />
        </div>

        <div className="line"></div>

        <h1>Information</h1>
        <p>
          제품명
          <span>{item.des}</span>
        </p>
        <p>
          제품설명
          <span>{item.ProductInfo}</span>
        </p>
        <p>
          향조노트
          <br />
          <span>{item.Note}</span>
          <br />
          <span>{item.Note2}</span>
          <br />
          <span>{item.Note3}</span>
        </p>
        <p>
          사용방법
          <span>{item.use}</span>
        </p>

        <div className="line"></div>

        <p>
          용량
          <span>{item.gram}</span>
        </p>
        <p>
          사용기한
          <span>{item.day}</span>
        </p>
        <p>
          유통기한
          <span>{item.limit}</span>
        </p>
        <p>
          사이즈(mm)
          <span>{item.mm}</span>
        </p>
        <p>
          전성분
          <span>{item.imd}</span>
        </p>
        <p>
          주의 사항
          <span>{item.caution}</span>
        </p>
        <div className="line"></div>
        <h1>Recommand</h1>
        <Link to={`/${item.id}`}>
          <figure>
            <img src={`${path}/images/${item.imgUrl}.jpg`} alt={item.title} />
            <figcaption>
              <p className="des">{item.title}</p>
              <p className="des">{item.price}</p>
              <p className="des">{item.des}</p>
              <p className="des">{item.gram}</p>
            </figcaption>
          </figure>
        </Link>
      </section>
    </div>
  );
}

export default ProductPage;
