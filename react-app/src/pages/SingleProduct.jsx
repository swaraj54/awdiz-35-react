import { useParams } from "react-router";

function SingleProduct() {
  const { productId, brandName } = useParams();
  return (
    <div>
      <h1>Product Id - {productId}</h1>
      <h2>Product Brand - {brandName}</h2>
    </div>
  );
}

export default SingleProduct;
