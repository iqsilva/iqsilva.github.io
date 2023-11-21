import React, { useState, useEffect } from "react";
import styles from "./productList.module.css";
import Product from "../../components/product/Product";
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
    <div id="projects" className={styles.product}>
      <div className={styles.product_texts}>
        <h1 className={styles.product_title}>Some of my Projects</h1>
        <p className={styles.product_desc}>
          Go to my Github to get access to all the projects. Click on the
          project you want to know about.
        </p>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.product_list}>
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
