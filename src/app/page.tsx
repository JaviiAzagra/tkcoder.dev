import Link from "next/link";
import { getAllTutorials } from "../lib/tutorials";
import { getAllArticles } from "../lib/articles";

export default function Home() {
  const tutorials = getAllTutorials();
  const articles = getAllArticles();

  const keywordColors: { [key: string]: string } = {
    React: "bg-blue-500",
    JavaScript: "bg-yellow-500",
    VsCode: "bg-blue-700",
    PowerShell: "bg-[#1E2E40]",
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
    <section className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-2 ">
        <h1 className="text-7xl font-bold">TkCoder</h1>
        <h2 className="text-2xl font-bold">
          Tu guía en el mundo del desarrollo y la informática.
        </h2>
      </div>
      <div className="flex flex-col gap-y-4">
        <div>
          <h3 className="text-2xl font-bold">Tutoriales Destacados</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-10">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.slug}
              className="flex flex-col justify-between gap-y-4 max-w-[340px] rounded-lg bg-white p-4 shadow-sm shadow-black/50 hover:scale-105 transition-all"
              href={`/tutorials/${tutorial.slug}`}
            >
              <h3 className="text-2xl font-bold">{tutorial.title}</h3>
              <p>{tutorial.description}</p>
              <div className="flex gap-x-4">
                {tutorial.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className={`text-sm font-semibold bg-opacity-30 rounded-full px-2 py-1 ${getBackgroundColor(
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

      <div className="flex flex-col gap-y-4">
        <div>
          <h3 className="text-2xl font-bold">Artículos Destacados</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-10">
          {articles.map((article) => (
            <Link
              key={article.slug}
              className="flex flex-col justify-between gap-y-4 max-w-[640px] rounded-lg bg-white p-4 shadow-sm shadow-black/50 hover:scale-105 transition-all"
              href={`/articles/${article.slug}`}
            >
              <h3 className="text-2xl font-bold">{article.title}</h3>
              <p>{article.description}</p>
              <div className="flex gap-x-4">
                {article.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className={`text-sm font-semibold bg-opacity-30 rounded-full px-2 py-1 ${getBackgroundColor(
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
    </section>
  );
}
