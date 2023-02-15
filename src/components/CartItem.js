import { Link } from 'react-router-dom';
import '../styles/productitem.scss';

function CartItem({ item }) {
  const path = process.env.PUBLIC_URL;
  const price = item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div>
      <ul className="cartBox">
        <li>
          <input type="checkbox" />
        </li>
        <li className="productInfo">
          <img src={`${path}/images/${item.imgUrl}.jpg`} alt={item.title} />
          <div className="title">
            <h3>{item.title}</h3>
            <span>{item.des}</span>
          </div>
        </li>
        <li className=""></li>
        <li></li>
        <li>
          <p>3,000 KRW</p>
        </li>
      </ul>
    </div>
  );
}
export default CartItem;
