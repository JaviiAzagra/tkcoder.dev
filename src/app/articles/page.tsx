import Link from "next/link";
import { getAllArticles } from "../../lib/articles";

const PostsPage = () => {
  const articles = getAllArticles();

  const keywordColors: { [key: string]: string } = {
    React: "bg-blue-500 text-white",
    JavaScript: "bg-yellow-400",
    VsCode: "bg-blue-600 text-white",
    PowerShell: "bg-blue-950 text-white",
    Windows: "bg-cyan-500",
  };

  const getBackgroundColor = (keywords: string[]): string => {
    for (let keyword of keywords) {
      if (keywordColors[keyword]) {
        return keywordColors[keyword];
      }
    }
    return "bg-gray-100";
  };

  return (
    <div className="flex flex-col gap-y-10">
      <h1 className="text-4xl font-bold">Artículos</h1>
      <div className="flex">
        {articles.map((article) => (
          <Link
            key={article.slug}
            className="flex flex-col gap-y-4 max-w-[640px] rounded-lg p-4 shadow-sm shadow-black/50 hover:scale-105 transition-all"
            href={`/articles/${article.slug}`}
          >
            <h3 className="text-2xl font-bold">{article.title}</h3>
            <p>{article.description}</p>
            <div className="flex gap-x-4">
              {article.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className={`text-sm font-semibold bg-green-500 rounded-full px-2 py-1 ${getBackgroundColor(
                    keyword.split(" ")
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
