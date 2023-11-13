import "./productList.css";
import Product from "../../components/product/Product";
import React, { useState, useEffect } from "react";
import Loader from "../../components/loader/Loader";

// const url = "https://gh-pinned-repos.egoist.dev/?username=iqsilva";
const url = "https://gh-pinned-repos--master.deno.dev/?username=iqsilva";

const ProductList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRepos = async () => {
    setLoading(true);
    const response = await fetch(url);
    const repos = await response.json();
    setTimeout(() => {
      setRepos(repos);
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Some of my Projects</h1>
        <p className="pl-desc">
          Go to my Github to get access to all the projects. Click on the
          project you want to know about.
        </p>
      </div>
      {loading ? (
        <Loader/>
      ) : (
        <div className="pl-list">
          {repos.map((item, i) => (
            <Product
              key={i}
              repo={item.repo}
              link={item.link}
              description={item.description}
              image={item.image}
              language={item.language}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
