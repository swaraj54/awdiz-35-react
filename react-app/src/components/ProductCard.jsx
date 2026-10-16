import { useNavigate } from "react-router";

function ProductCard(props) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product-details/${props.category}/${props.id}`);
  };

  return (
    <div
      key={props.id}
      onClick={handleNavigate}
      style={{
        border: "1px solid black",
        height: "400px",
        width: "23%",
        marginBottom: "20px",
        cursor: "pointer",
      }}
    >
      <img style={{ width: "100%", height: "70%" }} src={props.image} />
      <h4>Name - {props.title}</h4>
      <p>Price - {props.price}</p>
      <p>Category - {props.category}</p>
    </div>
  );
}

export default ProductCard;
