import Chevronleft from "@/icons/Chevronleft";
import { getTutorialBySlug } from "../../../lib/tutorials";
import Link from "next/link";

type TutorialProps = {
  params: { slug: string };
};

const Tutorial = async ({ params }: TutorialProps) => {
  const { slug } = await params;
  const tutorial = await getTutorialBySlug(slug);

  if (!tutorial) {
    return <div>Tutorial no encontrado</div>;
  }

  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex items-center gap-x-4">
        <Chevronleft />
        <div className="flex items-center gap-x-2">
          <Link className="hover:underline" href="/tutorials">
            Tutoriales
          </Link>
          <p>&gt;</p>
          <p className="font-bold capitalize">{tutorial.title}</p>
        </div>
      </div>
      <div>
        <h1 className="flex items-center gap-x-4 text-4xl font-bold">
          {tutorial.title || "Título no disponible"}
        </h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: tutorial.content }} />
    </div>
  );
};

export default Tutorial;
