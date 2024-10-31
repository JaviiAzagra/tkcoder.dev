import Chevronleft from "@/icons/Chevronleft";
import { getTutorialBySlug } from "../../../lib/tutorials";
import Link from "next/link";

// Definimos el tipo para los parámetros
type Params = { slug: string };

// Componente de la página de artículo
const Tutorial = async ({ params }: { params: Promise<Params> }) => {
  const { slug } = await params; // Esperamos a que params se resuelva
  const tutorial = await getTutorialBySlug(slug); // Cargamos el artículo

  if (!tutorial) {
    return <div>Artículo no encontrado</div>;
  }

  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex items-center gap-x-4">
        <Chevronleft />
        <div className="flex items-center gap-x-2">
          <Link className="hover:underline" href="/tutorials">
            Artículos
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
