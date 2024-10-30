import Link from "next/link";
import { getAllTutorials } from "../../lib/tutorials";

const PostsPage = () => {
  const tutorials = getAllTutorials();

  return (
    <div className="flex flex-col gap-y-10">
      <h1 className="text-4xl font-bold">Tutoriales</h1>
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
                  className="text-sm font-semibold bg-green-500 bg-opacity-30 text-green-950 rounded-full px-2 py-1"
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
