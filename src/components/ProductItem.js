import { Link } from 'react-router-dom';
import '../styles/productitem.scss';

function ProductItem({ item }) {
  const path = process.env.PUBLIC_URL;
  const price = item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className="main-items">
      <Link to={`/${item.id}`}>
        <figure>
          <img src={`${path}/images/${item.imgUrl}.jpg`} alt={item.title} />
          <figcaption>
            <p>{item.des}</p>
            <p>{item.gram}</p>
          </figcaption>
          <div className="title">
            <h3>{item.title}</h3>
            <p>{price} KRW</p>
          </div>
        </figure>
      </Link>
    </div>
  );
}
export default ProductItem;
