import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const ProductCard = ({ product, loading }) => {
  return (
    <>
      {loading ? (
        <ProductCardSkeleton />
      ) : (
        <Card to={`/product/${product.id}`}>
          <Photo 
            className="card"
            src={staticServerUrl + `/images/${product.id}.jpg`} 
            alt={product.productName} />
          <div className="product-name">{product.productName}</div>
          <div className="product-price">{comma(product.price)}원</div>
        </Card>
      )}
    </>
  );
};

export default ProductCard;