import React, { useEffect, useState } from "react";
import "./ReactProject.scss";
import Pagination from "../../../Components/Pagination/Pagination";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";

const ReactProject = () => {
  const [comment, setComment] = useState({
    name: "",
    content: "",
    date: new Date(
      new Date().toLocaleString("en-US", { timeZone: "Europe/Madrid" })
    ).toISOString(),
    url: "reactproject",
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

        const commentsData = response.data.filter(
          (item) => item.url === "reactproject"
        );

        // Invertir el orden de los comentarios
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
    <div className="reactproject">
      <div className="reactproject--title">
        <h1>Como crear un nuevo proyecto en React</h1>
        <p>
          React se ha vuelto fundamental en el desarrollo web contemporáneo.
          Configurarlo en tu computadora es el primer paso para comenzar a crear
          interfaces de usuario impresionantes.
        </p>
      </div>
      <div className="reactproject--container">
        <div className="reactproject--container__tutorial">
          <h2>1. Instala Node.js y npm.</h2>
          <p>
            Para poder crear un proyecto en React necesitas tener instalado
            Node.js y npm. Puedes descargarlo desde la página oficial de
            Node.js.
          </p>
          <p>
            Puedes instalar Node.js{" "}
            <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">
              aqui
            </a>
          </p>
          <img src="/assets/reactproject1.png" alt="Node.js" />
          <p>
            Después de haber terminado de instalar, puedes verificar si Node.js
            y npm se han instalado correctamente abriendo una ventana de
            comandos y ejecutando estos comandos.
          </p>
          <p className="terminal">node -v npm -v</p>
        </div>
        <div className="reactproject--container__tutorial">
          <h2>2. Instala Create React App.</h2>
          <p>
            Create React App es una herramienta que nos permite crear un nuevo
            proyecto en React con un solo comando.
          </p>
          <p className="terminal">npm install -g create-react-app</p>
          <p>
            Este comando instala Create React App en tu sistema, haciendo que
            esté disponible para su uso en cualquier directorio.
          </p>
        </div>
        <div className="reactproject--container__tutorial">
          <h2>3. Crea un nuevo proyecto en React.</h2>
          <p>
            Ahora que tenemos Node.js, npm y Create React App instalados,
            podemos crear un nuevo proyecto en React.
          </p>
          <p className="terminal">npx create-react-app my-app</p>
          <p>
            Este comando creará un nuevo proyecto en React llamado "my-app" en
            el directorio actual.
          </p>
          <p>
            Ahora abrimos el proyecto en un editor de código (en este caso en VS
            Code)
          </p>
          <p className="terminal">cd my-app</p>
          <p className="terminal">code .</p>
        </div>
        <div className="reactproject--container__tutorial">
          <h2>4. Ejecuta el proyecto.</h2>
          <p>
            Ahora que tenemos nuestro proyecto en React, podemos ejecutarlo
            utilizando el siguiente comando.
          </p>
          <p className="terminal">npm start</p>
          <p>
            Este comando inicia el servidor de desarrollo y abre tu aplicación
            en tu navegador predeterminado.
          </p>
          <img src="/assets/reactproject2.png" alt="ReactApp" />
        </div>
        <div className="reactproject--container__tutorial">
          <h2>5. Conclusión</h2>
          <p>
            Como puedes ver, crear un nuevo proyecto en React es muy sencillo y
            rápido. Ahora puedes comenzar a desarrollar tu aplicación en React.
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
    </div>
  );
};

export default ReactProject;
