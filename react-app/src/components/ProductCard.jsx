import { useNavigate } from "react-router";

function ProductCard(props) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/single-product/${props.brand}/${props.id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      style={{
        border: "1px solid black",
        height: "400px",
        width: "18%",
        marginBottom: "20px",
        cursor: "pointer",
      }}
    >
      <img style={{ width: "100%", height: "70%" }} src={props.image} />
      <h4>Name - {props.title}</h4>
      <p>Price - {props.price}</p>
      <p>Brand - {props.brand}</p>
    </div>
  );
}

export default ProductCard;
