import React, { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import { mapArray } from "../../utils/Arrays";
import { useTranslation } from "react-i18next";

const url = `https://api.github.com/users/iqsilva/repos`;

const ProductList = () => {
  const {t} = useTranslation();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRepos = async () => {
    setLoading(true);
    const request = await fetch(url);
    const response = await request.json();
    const totalRepos = mapArray(response, (item) => ({
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
    <div id="projects" className="productList">
      <div className="productList_texts">
        <h1 className="productList_title">{t("productList_title")}</h1>
        <p className="productList_desc">
          {t("productList_description")}
        </p>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="productList_list">
          {repos.map((item, i) => (
            <Card
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
