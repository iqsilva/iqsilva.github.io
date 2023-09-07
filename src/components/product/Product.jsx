// import "./product.css";
import "./styles.css";
import backimg from "../../img/backimg.png";

const Product = ({ repo, link, description, image, language }) => {
  
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image} alt="" className="p-img" />
        <img
          src={backimg}
          alt=""
          className="p-imgback"
        />
      </a>
    </div>
  );
};

export default Product;
