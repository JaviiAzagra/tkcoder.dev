import React, { useEffect, useState } from "react";
import "./OhMyPosh.scss";
import axios from "axios";
import Pagination from "../../../Components/Pagination/Pagination";

const OhMyPosh = () => {
  const [comment, setComment] = useState({
    name: "",
    content: "",
    date: new Date().toISOString().split("T")[0],
    url: "ohmyposh",
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
          (item) => item.url === "ohmyposh"
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

  /* const images = [
    "/assets/logos/js.png",
    "/assets/logos/react.png",
    "/assets/logos/html.png",
  ];

  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []); */

  return (
    <div class="containerOhmyposh">
      <div class="title">
        <h1>Como instalar Oh my Posh en Windows 10/11</h1>
      </div>
      <div class="text">
        <p>
          Oh My Posh es un marco de trabajo (framework) para la personalización
          del prompt de la línea de comandos en PowerShell. Proporciona una
          forma sencilla de mejorar y personalizar la apariencia y funcionalidad
          del prompt de PowerShell, permitiéndote agregar información útil como
          el estado del repositorio de git, el entorno de la máquina, el usuario
          actual, la hora, entre otros detalles, de una manera visualmente
          atractiva y funcional.
        </p>
        <p>
          En este tutorial te mostraré cómo instalar Oh My Posh en Windows 10/11
          y cómo configurarlo para que se ejecute automáticamente cada vez que
          abras una nueva ventana de PowerShell.
        </p>
      </div>
      <div class="tutorial">
        <h2>1. Instalar Windows Terminal</h2>
        <p>
          Si aún no tienes instalado Windows Terminal, puedes descargarlo desde
          la tienda de aplicaciones de Windows o desde el siguiente enlace
          <a
            href="https://apps.microsoft.com/detail/9N0DX20HK701?activetab=pivot%3Aoverviewtab&hl=es-co&gl=CO"
            target="_blank"
            rel="noreferrer"
          >
            (link)
          </a>
          .
        </p>
        <img src="/assets/terminalohmyposh.png" alt="terminalohmyposh" />
      </div>
      <div class="tutorial">
        <h2>2. Instalar PowerShell</h2>
        <p>
          Si aún no tienes instalado PowerShell, puedes descargarlo desde la
          tienda de aplicaciones de Windows o desde el siguiente enlace
          <a
            href="https://apps.microsoft.com/detail/9MZ1SNWT0N5D?hl=es-co&gl=CO"
            target="_blank"
            rel="noreferrer"
          >
            (link)
          </a>
          .
        </p>
        <img src="/assets/powershellohmyposh.png" alt="powershellohmyposh" />
      </div>
      <div class="tutorial">
        <h2>3. Establecer PowerShell como predeterminado</h2>
        <p>
          Abre Windows Terminal y selecciona PowerShell como la terminal
          predeterminada.
        </p>
        <img src="/assets/terminalpowershell.png" alt="terminalpowershell" />
      </div>
      <div class="tutorial">
        <h2>4. Instalar Oh My Posh</h2>
        <p>
          Abre una nueva ventana de PowerShell y ejecuta el siguiente comando
          para instalar Oh My Posh:
        </p>
        <p class="terminal">winget install JanDeDobbeleer.OhMyPosh -s winget</p>
        {/* <img src="/assets/terminalpowershell.png" alt="terminalpowershell" /> */}
      </div>
      <div class="tutorial">
        <h2>5. Configurar Oh My Posh</h2>
        <p>
          Una vez que Oh My Posh esté instalado, puedes configurarlo para que se
          ejecute automáticamente cada vez que abras una nueva ventana de
          PowerShell. Para hacer esto, abre tu perfil de PowerShell ejecutando
          el siguiente comando:
        </p>
        <p class="terminal">notepad $PROFILE</p>
        <p>
          Cuando el comando anterior dé un error, asegúrese de crear el perfil
          primero y luego ejecuta el comando anterior.
        </p>
        <p class="terminal">New-Item -Path $PROFILE -Type File -Force</p>
        <p>
          Esto abrirá tu perfil de PowerShell en el editor de texto Notepad. Si
          no tienes un perfil de PowerShell, Notepad te preguntará si deseas
          crear uno. Haz clic en "Sí" para crear un nuevo perfil.
        </p>
        <p>
          Una vez que tu perfil de PowerShell esté abierto en Notepad, agrega el
          siguiente comando para cargar Oh My Posh automáticamente cada vez que
          abras una nueva ventana de PowerShell:
        </p>
        <p class="terminal">
          oh-my-posh init pwsh --config
          "$env:POSH_THEMES_PATH/probua.minimal.omp.json" | Invoke-Expression
        </p>
        <img src="/assets/notepadcommand.png" alt="notepadcommand" />
      </div>
      <div class="tutorial">
        <h2>6. Guardar y cerrar</h2>
        <p>
          Guarda tu perfil de PowerShell en Notepad y ciérralo. A partir de
          ahora, Oh My Posh se ejecutará automáticamente cada vez que abras una
          nueva ventana de PowerShell.
        </p>
        <img src="/assets/terminalfin.png" alt="terminalfin" />
      </div>
      <div class="tutorial">
        <h2>7. Personalizar Oh My Posh</h2>
        <p>
          Puedes personalizar Oh My Posh cambiando el tema predeterminado o
          creando tu propio tema. Para cambiar el tema predeterminado, abre tu
          perfil de PowerShell en Notepad y cambia el nombre del archivo de tema
          en el comando que agregaste anteriormente. Por ejemplo, si quieres
          cambiar el tema a "paradox", el comando se vería así:
        </p>
        <p class="terminal">
          oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/paradox.omp.json"
          | Invoke-Expression
        </p>
        <p>
          Si quieres crear tu propio tema, puedes hacerlo siguiendo las
          instrucciones en la documentación oficial de Oh My Posh
          <a
            href="https://ohmyposh.dev/docs/themes"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            (link)
          </a>
          .
        </p>
      </div>
      <div class="tutorial">
        <h2>8. Disfruta de tu nuevo prompt</h2>
        <p>
          ¡Eso es todo! Ahora tienes Oh My Posh instalado y configurado en tu
          sistema. Disfruta de tu nuevo prompt de PowerShell con información
          útil y un aspecto visualmente atractivo.
        </p>
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
                  {/* <img src="/assets/logos/js.png" alt="Userimg" />
                  <img src="/assets/logos/react.png" alt="Userimg" />
                  <img src="/assets/logos/html.png" alt="Userimg" /> */}
                  <img src="/assets/userimg.png" alt="Userimg" />
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.content}</p>
                  {/* <p>{item.date}</p> */}
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

export default OhMyPosh;
