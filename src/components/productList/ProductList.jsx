import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Some of my Projects</h1>
        <p className="pl-desc">
          Go to my Github to get access to all the projects. Click on the
          project you want to know about.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} backimg={item.backimg} backimgdark={item.backimgdark} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
