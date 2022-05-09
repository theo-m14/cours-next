import Link from "next/link";
import Meta from "./Meta";

const Article = ({ article }) => {
  return (
    <Link href={"/article/[id]"} as={`/article/${article.id}`}>
      <a className="article">
        <h3>{article.title} ➡️</h3>
        <p>{article.body.slice(0, 20)} ...</p>
      </a>
    </Link>
  );
};

export default Article;
