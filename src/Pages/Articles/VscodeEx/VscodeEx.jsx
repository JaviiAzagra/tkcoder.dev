import React, { useEffect, useState } from "react";
import "./VscodeEx.scss";
import axios from "axios";
import Pagination from "../../../Components/Pagination/Pagination";
import moment from "moment";
import "moment/locale/es";

const VscodeEx = () => {
  const [comment, setComment] = useState({
    name: "",
    content: "",
    date: new Date(
      new Date().toLocaleString("en-US", { timeZone: "Europe/Madrid" })
    ).toISOString(),
    url: "vscodeext",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(5); // Número de comentarios por página

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  const handleSubmitComment = async () => {
    try {
      const response = await fetch(
        "https://tkcoder-dev-api.vercel.app/comments/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(comment),
        }
      );

      if (response.ok) {
        console.log("Comentario enviado exitosamente");
        window.location.reload();
      } else {
        console.error("Error al enviar el comentario");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tkcoder-dev-api.vercel.app/comments`
        );

        // Filter only the keyboards from the API response
        const commentsData = response.data.filter(
          (item) => item.url === "vscodeext"
        );

        setData(commentsData.reverse());
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Obtener los comentarios actuales según la página
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments =
    data && data.slice(indexOfFirstComment, indexOfLastComment);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <main className="VscodeEx">
      <div class="containerVscodeEx">
        <div class="title">
          <h1>Top 10 extensiones de Visual Studio Code</h1>
          <p>
            Visual Studio Code es un software de código abierto creado por
            Microsoft para su uso en sistemas operativos Windows, Linux y MacOS.
            Es altamente valorado en la comunidad de desarrollo web como una de
            las herramientas más sobresalientes para editar código. Cuenta con
            un amplio respaldo de una comunidad activa que ofrece soporte y una
            amplia gama de funcionalidades para simplificar el proceso de
            desarrollo. Además de admitir múltiples lenguajes de programación,
            permite la personalización mediante la creación de atajos de teclado
            personalizados, la refactorización de código y la adición de
            extensiones para adaptarlo a tus necesidades específicas y maximizar
            su potencial.
          </p>
          <p>
            En este artículo, te presentaré las 10 extensiones que son
            imprescindibles para maximizar tu experiencia con Visual Studio Code
            y simplificar tus tareas diarias.
          </p>
        </div>
        <div class="extensiones">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
            target="_blank"
            rel="noreferrer"
          >
            1. PRETTIER
          </a>
          <p>
            Esta herramienta te permite automatizar el formateo del código según
            las convenciones de cada lenguaje de programación. Es compatible con
            una amplia variedad de lenguajes, incluyendo JavaScript, JSX, Flow,
            TypeScript, JSON, HTML, Vue, Angular, CSS, Less, SCSS, GraphQL,
            MarkDown, CommonMark, MDX y YAML. Prettier viene con reglas
            predefinidas, pero también te permite personalizarlas según tus
            preferencias, como la ubicación de los saltos de línea, las
            tabulaciones, los espacios, entre otros.
          </p>
          <img src="/assets/exprettier.png" alt="Prettier" />
        </div>
        <div class="extensiones">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare"
            target="_blank"
            rel="noreferrer"
          >
            2. LIVE SHARE
          </a>
          <p>
            Esta extensión te brinda la capacidad de colaborar en tiempo real
            con otro programador mientras editas y depuras el código. Además de
            permitir la comunicación mediante llamadas y chat, también facilita
            el intercambio de terminales y servidores. Al igual que en otras
            herramientas de trabajo colaborativo, puedes visualizar la posición
            de tu compañero en el programa y en qué línea de código están
            trabajando. Si surge algún problema, tienen la opción de comunicarse
            y resolverlo juntos al momento. ¡Celebremos el poder del trabajo en
            equipo en tiempo real!
          </p>
          <img src="/assets/exliveshare.png" alt="LiveShare" />
        </div>
        <div class="extensiones">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
            target="_blank"
            rel="noreferrer"
          >
            3. ESLINT
          </a>
          <p>
            ESLint es una herramienta de linting para JavaScript que ayuda a
            identificar y corregir problemas en el código JavaScript. Su
            principal objetivo es ayudar a mantener un código limpio y
            consistente dentro de un proyecto, siguiendo las mejores prácticas y
            evitando errores comunes.
          </p>
          <img src="/assets/exeslint.png" alt="Eslint" />
        </div>
        <div class="extensiones">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
            target="_blank"
            rel="noreferrer"
          >
            4. GITLENS
          </a>
          <p>
            Esta extensión ofrece una amplia gama de herramientas para gestionar
            proyectos con GIT. Con ella, puedes acceder a información detallada
            como el autor de las confirmaciones, detalles del repositorio actual
            y las ramas disponibles. Además, según el archivo o línea en la que
            te encuentres, te permite revisar el historial de cambios,
            facilitando comparaciones precisas. Es una herramienta muy completa
            que optimiza tu experiencia al trabajar con GIT.
          </p>
          <img src="/assets/exgitlens.gif" alt="GitLens" />
        </div>
        <div class="extensiones">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow"
            target="_blank"
            rel="noreferrer"
          >
            5. INDENT RAINBOW
          </a>
          <p>
            Esta extensión emplea barras de colores para visualizar el nivel de
            indentación de tu código, lo que mejora su legibilidad. Mientras que
            para códigos pequeños podría no ser crucial, a medida que estos
            crecen, la identificación de la indentación puede volverse más
            complicada. Esta herramienta resuelve este problema, haciendo que
            trabajar con código de mayor tamaño sea mucho más sencillo. Su
            utilidad es comparable a la alegría que trae un arcoíris después de
            una tormenta.
          </p>
          <img src="/assets/exindentr.png" alt="IndentRainbow" />
        </div>
        <div class="extensiones">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap"
            target="_blank"
            rel="noreferrer"
          >
            6. CODESNAP
          </a>
          <p>
            La extensión CodeSnap para Visual Studio Code (VSCode) es una
            herramienta poderosa que permite a los desarrolladores capturar y
            compartir fragmentos de código de manera rápida y sencilla. Esta
            extensión es especialmente útil para la creación de tutoriales,
            documentación de código, presentaciones y comunicación en equipos de
            desarrollo.
          </p>
          <img src="/assets/excodesnap.png" alt="CodeSnap" />
        </div>
        <div class="extensiones">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens"
            target="_blank"
            rel="noreferrer"
          >
            7. ERROR LENS
          </a>
          <p>
            Error Lens es una extensión altamente valorada para Visual Studio
            Code que mejora significativamente la experiencia de desarrollo al
            proporcionar una visualización instantánea y enriquecida de los
            errores y advertencias en el código. Esta herramienta esencial
            ofrece una forma eficiente y efectiva de identificar y abordar
            problemas de código mientras se escribe, lo que permite a los
            desarrolladores mantener un flujo de trabajo productivo y enfocado.
          </p>
          <img src="/assets/exerrorlens.png" alt="ErrorLens" />
        </div>
        <div class="extensiones">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode"
            target="_blank"
            rel="noreferrer"
          >
            8. POSTMAN
          </a>
          <p>
            La extensión de Postman para Visual Studio Code es una herramienta
            imprescindible para los desarrolladores que trabajan con APIs.
            Postman, una plataforma ampliamente reconocida y utilizada para
            probar y documentar APIs, ahora se integra perfectamente en el
            entorno de desarrollo de VSCode, brindando a los desarrolladores una
            experiencia fluida y unificada.
          </p>
          <img src="/assets/expostman.png" alt="POSTMAN" />
        </div>
        <div class="extensiones">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
            target="_blank"
            rel="noreferrer"
          >
            9. LIVE SERVER
          </a>
          <p>
            Esta extensión es altamente valorada por desarrolladores front-end,
            ya que establece un servidor local que te permite visualizar tus
            cambios en tiempo real. Con esta función, cualquier modificación que
            realices se actualizará automáticamente en el servidor local, lo que
            facilita enormemente el proceso de desarrollo y visualización de tu
            trabajo en curso.
          </p>
          <img src="/assets/exliveserver.gif" alt="LiveServer" />
        </div>
        <div class="extensiones">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"
            target="_blank"
            rel="noreferrer"
          >
            10. CODE SPELL CHECKER
          </a>
          <p>
            La extensión Code Spell Checker para Visual Studio Code es una
            herramienta esencial para los desarrolladores que desean mantener un
            código limpio y libre de errores tipográficos. Esta extensión ofrece
            una forma rápida y eficiente de identificar y corregir errores de
            ortografía en el código, comentarios y cadenas de texto, lo que
            ayuda a mejorar la legibilidad y la calidad del código.
          </p>
          <img src="/assets/excodespell.png" alt="CodeSpellChecker" />
        </div>
        <div>
          <p>
            Estas son solo algunas de las muchas extensiones disponibles para
            Visual Studio Code. La amplia gama de extensiones disponibles en el
            mercado permite a los desarrolladores personalizar su entorno de
            desarrollo y maximizar su productividad. Si bien estas extensiones
            son altamente recomendadas, te animo a explorar el mercado de
            extensiones de Visual Studio Code y descubrir las herramientas que
            mejor se adapten a tus necesidades y preferencias.
          </p>
        </div>
      </div>
      <div className="comments">
        <h2>Comentarios</h2>
        <input
          type="text"
          name="name"
          value={comment.name}
          onChange={handleInputChange}
          placeholder="Tu nombre"
        />
        <textarea
          type="text"
          name="content"
          value={comment.content}
          onChange={handleInputChange}
          placeholder="Tu comentario"
        />
        <input
          style={{ display: "none" }}
          type="date"
          name="date"
          value={comment.date}
          onChange={handleInputChange}
          placeholder="Fecha"
          disabled
        />
        <input
          style={{ display: "none" }}
          type="text"
          name="url"
          value={comment.url}
          onChange={handleInputChange}
          disabled
        />
        <button onClick={handleSubmitComment}>Enviar</button>
        <div className="comments--container">
          {loading && <p>Cargando comentarios...</p>}
          {error && <p>Error al cargar comentarios: {error.message}</p>}
          {currentComments &&
            currentComments.reverse().map((item) => (
              <div className="comments--container__comment" key={item.id}>
                <div className="shuffle">
                  <img src="/assets/userimg.png" alt="Userimg" />
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.content}</p>
                  <span>{moment(item.date).fromNow()}</span>
                </div>
              </div>
            ))}
          {currentComments && currentComments.length === 0 && (
            <p>No hay comentarios</p>
          )}
        </div>
        <Pagination
          itemsPerPage={commentsPerPage}
          totalItems={data && data.length}
          paginate={paginate}
        />
      </div>
    </main>
  );
};

export default VscodeEx;
