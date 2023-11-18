import "./productList.css";
import Product from "../../components/product/Product";
import React, { useState, useEffect } from "react";
import Loader from "../../components/loader/Loader";

const url = `https://api.github.com/users/iqsilva/repos`;

const ProductList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRepos = async () => {
    setLoading(true);
    const request = await fetch(url);
    const response = await request.json();
    const totalRepos = response.map((item) => ({
      id: item.id,
      name: item.name,
      url: item.html_url,
      description: item.description,
      image: `https://opengraph.githubassets.com/1/iqsilva/${item.name}`,
      stargazers_count: item.stargazers_count
    }));
    const filteredRepos = totalRepos.filter((item) => item.stargazers_count > 0);
    setTimeout(() => {
      setRepos(filteredRepos);
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
        <Loader />
      ) : (
        <div className="pl-list">
          {repos.map((item, i) => (
            <Product
              key={i}
              repo={item.name}
              link={item.url}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
