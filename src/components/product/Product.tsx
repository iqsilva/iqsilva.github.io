import "./product.css";
import backimg from "../../img/backimg.png";

type Props = {
  repo: string;
  link: string;
  description: string;
  image: string;
  language: string;
};

const Product: React.FC<Props> = ({
  repo,
  link,
  description,
  image,
  language,
}) => (
  <div className="p">
    <div className="p-browser">
      <div className="p-circle"></div>
      <div className="p-circle"></div>
      <div className="p-circle"></div>
    </div>
    <a href={link} target="_blank" rel="noreferrer">
      <img src={image} alt="" className="p-img" />
      <img src={backimg} alt="" className="p-imgback" />
    </a>
  </div>
);

export default Product;
