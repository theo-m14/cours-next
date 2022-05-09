import axios from "axios";
import React from "react";
import Article from "../components/Article";
import Meta from "../components/Meta";

const index = ({ articles }) => {
  return (
    <div>
      <Meta />
      <h2>Blog</h2>
      <div className="article-list">
        {articles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default index;

//exécuter le code coté server
export const getStaticProps = async () => {
  const result = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );

  const articles = result.data;

  console.log(articles);
  return {
    props: {
      articles,
    },
  };
};
