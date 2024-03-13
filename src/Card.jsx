import Price from "./Price.jsx";

function Card(props) {
    const { imageUrl, title, description } = props;
  
    return (
      <div className="card">
      <img className="card-image" src={imageUrl} alt="pic" height="200px" width="300px" />
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <Price/>
  </div>
    );
  }
  
  export default Card;