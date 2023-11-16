import "./productList.css";
import Product from "../../components/product/Product";
import React, { useState, useEffect } from "react";
import Loader from "../../components/loader/Loader";
import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const ProductList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = import.meta.env.VITE_GITHUB_ACCESS_TOKEN

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  const getRepos = async () => {
    setLoading(true);
    const { data } = await client.query({
      query: gql`
        {
          user(login: "iqsilva") {
            pinnedItems(first: 6, types: [REPOSITORY]) {
              totalCount
              edges {
                node {
                  ... on Repository {
                    id
                    name
                    url
                    description
                    openGraphImageUrl
                  }
                }
              }
            }
          }
        }
      `
    });
    const { user } = data;
    const pinnedItems = user.pinnedItems.edges.map(edge => edge.node);
    setTimeout(() => {
      setRepos(pinnedItems);
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
