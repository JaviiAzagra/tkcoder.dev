import React, { useEffect, useState } from "react";
import "./Herramientas.scss";
import Pagination from "../../../Components/Pagination/Pagination";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";

const Herramientas = () => {
  const [comment, setComment] = useState({
    name: "",
    content: "",
    date: new Date(
      new Date().toLocaleString("en-US", { timeZone: "Europe/Madrid" })
    ).toISOString(),
    url: "herramientasfullstack",
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
          (item) => item.url === "herramientasfullstack"
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

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments =
    data && data.slice(indexOfFirstComment, indexOfLastComment);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="herramientas">
      <div className="herramientas--title">
        <h1>Top 10 herramientas para desarrollador Full Stack</h1>
        <p>
          Destaca las herramientas y tecnologías clave que todo desarrollador
          Full Stack debería conocer y dominar, desde frameworks de frontend
          como React o Angular, hasta bases de datos como MongoDB o MySQL.
        </p>
      </div>
      <div className="herramientas--container">
        <div className="herramientas--container__tutorial">
          <h2>Visual Studio Code</h2>
          <p>
            Visual Studio Code es un editor de código fuente desarrollado por
            Microsoft para Windows, Linux y macOS. Incluye soporte para la
            depuración, control integrado de Git, resaltado de sintaxis,
            finalización inteligente de código, fragmentos y refactorización de
            código.
          </p>
        </div>
        <div className="herramientas--container__tutorial">
          <h2>React</h2>
          <p>
            React es una biblioteca de JavaScript para construir interfaces de
            usuario. React es mantenida por Facebook y una comunidad de
            desarrolladores individuales y empresas.
          </p>
        </div>
        <div className="herramientas--container__tutorial">
          <h2>Node.js</h2>
          <p>
            Node.js es un entorno de ejecución para JavaScript construido con el
            motor de JavaScript V8 de Chrome. Node.js usa un modelo de
            operaciones E/S sin bloqueo y orientado a eventos, que lo hace
            liviano y eficiente.
          </p>
        </div>
        <div className="herramientas--container__tutorial">
          <h2>Express</h2>
          <p>
            Express es un marco de aplicación web de back-end para Node.js,
            publicado como software libre y de código abierto bajo la Licencia
            MIT. Está diseñado para construir aplicaciones web y API.
          </p>
        </div>
        <div className="herramientas--container__tutorial">
          <h2>MongoDB</h2>
          <p>
            MongoDB es un sistema de base de datos NoSQL, orientado a documentos
            y de código abierto. Usa un modelo de datos de documentos, y dentro
            de un documento, se pueden anidar otros documentos.
          </p>
        </div>
        <div className="herramientas--container__tutorial">
          <h2>MySQL</h2>
          <p>
            MySQL es un sistema de gestión de bases de datos relacional, que
            utiliza un modelo cliente-servidor. MySQL es un software de código
            abierto.
          </p>
        </div>
        <div className="herramientas--container__tutorial">
          <h2>Postman</h2>
          <p>
            Postman es una plataforma de colaboración para el desarrollo de API.
            Postman's features simplify each step of building an API and
            streamline collaboration so you can create better APIs—faster.
          </p>
        </div>
        <div className="herramientas--container__tutorial">
          <h2>Git</h2>
          <p>
            Git es un sistema de control de versiones distribuido de código
            abierto y gratuito diseñado para manejar todo, desde proyectos
            pequeños hasta muy grandes, con velocidad y eficiencia.
          </p>
        </div>
        <div className="herramientas--container__tutorial">
          <h2>GitHub</h2>
          <p>
            GitHub es una forja para alojar proyectos utilizando el sistema de
            control de versiones Git. Se utiliza principalmente para la creación
            de código fuente de programas de computadora.
          </p>
        </div>
        <div className="herramientas--container__tutorial">
          <h2>Heroku</h2>
          <p>
            Heroku es una plataforma como servicio de computación en la nube que
            soporta distintos lenguajes de programación. Heroku, una de las
            primeras plataformas en la nube, ha sido desarrollada con Ruby como
            lenguaje de programación.
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

export default Herramientas;
