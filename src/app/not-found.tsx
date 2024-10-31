import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center lg:pt-52">
      <h1 className="flex flex-col items-center">
        <span className="font-bold text-8xl lg:text-[200px]">404</span> Página
        no encontrada
      </h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>
        Volver al inicio
      </Link>
    </div>
  );
}
