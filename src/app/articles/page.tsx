import Link from "next/link";
import { getAllArticles } from "../../lib/articles";
import { getBackgroundColor } from "../../lib/colors";

const PostsPage = () => {
  const articles = getAllArticles();

  return (
    <div className="flex flex-col gap-y-10">
      <h1 className="text-4xl font-bold">Artículos</h1>
      <div className="flex flex-col gap-y-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            className="flex flex-col gap-y-4 rounded-lg p-4 shadow-sm bg-white shadow-black/50 hover:scale-[1.02] transition-all"
            href={`/articles/${article.slug}`}
          >
            <h3 className="text-2xl font-bold">{article.title}</h3>
            <p>{article.description}</p>
            <div className="flex gap-x-4">
              {article.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className={`text-sm font-semibold rounded-full px-2 py-1 ${getBackgroundColor(
                    [keyword]
                  )}`}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
