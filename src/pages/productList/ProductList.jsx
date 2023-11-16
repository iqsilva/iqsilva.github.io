import "./productList.css";
import Product from "../../components/product/Product";
import React, { useState, useEffect } from "react";
import Loader from "../../components/loader/Loader";

const ProductList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRepos = async () => {
    setLoading(true);
    const response = await fetch('https://api.github.com/graphql', {
      method: 'post',
      headers: {
        Authorization: 'key','Content-Type': 'application/json',
      },
        body: JSON.stringify({
            query:  `{
                user(login: "iqsilva") {
                  pinnedItems(first: 6, types: REPOSITORY) {
                    nodes {
                      ... on RepositoryInfo {
                        id
                        name
                        url
                        description
                        openGraphImageUrl
                      }
                    }
                  }
                }
              }`
            })
          });
          response.data.user.pinnedItems.nodes.map((item) => {
            repos.push(item);
          });
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
              repo={item.name}
              link={item.url}
              description={item.description}
              image={item.openGraphImageUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
