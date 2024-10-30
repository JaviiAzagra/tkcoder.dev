import Chevronleft from "@/icons/Chevronleft";
import { getArticleBySlug } from "../../../lib/articles";
import Link from "next/link";

type ArticleProps = {
  params: { slug: string };
};

const Article = async ({ params }: ArticleProps) => {
  const { slug } = await params;

  const article = await getArticleBySlug(slug);

  if (!article) {
    return <div>Artículo no encontrado</div>;
  }

  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex items-center gap-x-4">
        <Chevronleft />
        <div className="flex items-center gap-x-2">
          <Link className="hover:underline" href="/articles">
            Artículos
          </Link>
          <p>&gt;</p>
          <p className="font-bold capitalize">{article.title}</p>
        </div>
      </div>
      <div>
        <h1 className="flex items-center gap-x-4 text-4xl font-bold">
          {article.title || "Título no disponible"}
        </h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default Article;
