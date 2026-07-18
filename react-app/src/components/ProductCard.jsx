function ProductCard(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        height: "400px",
        width: "18%",   
        marginBottom: "20px",
      }}
    >
      <img style={{ width: "100%", height: "70%" }} src={props.image} />
      <h4>{props.title}</h4>
      <p>{props.price}</p>
    </div>
  );
}

export default ProductCard;
