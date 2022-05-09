import axios from "axios";
import Link from "next/link";
import Meta from "../../components/Meta";

const article = ({ article }) => {
  return (
    <div className="article-page">
      <Meta title={article.title} />
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <Link href="/">Retour à l'acceuil</Link>
    </div>
  );
};

export default article;

export const getStaticProps = async (context) => {
  const result = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/" + context.params.id
  );

  const article = result.data;

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  const articles = res.data;
  //préparer les id dans un object Path{id:1,id:2,id:3}
  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
