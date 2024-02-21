import React from "react";
import "./DarkMode.scss";

const DarkMode = () => {
  return (
    <div class="container">
      <div class="title">
        <h1>Añadir Dark Mode en tu página de React 🌙</h1>
      </div>
      <div class="text">
        <p>
          El modo oscuro sería una excelente adición a tu aplicación, ya que
          enriquecería la experiencia del usuario. En esta ocasión, te mostraré
          cómo implementarlo en React sin necesidad de utilizar ninguna librería
          externa.
        </p>
      </div>
      <div class="tutorial-1">
        <h2>1. Primero creamos el proyecto.</h2>
        <p>
          Al proyecto lo llamaremos darkmode (le puedes poner el nombre que
          quieras).
        </p>
        <p class="terminal">npx create-react-app darkmode</p>
        <p>Una vez creado, navegamos al directorio que se acaba de crear.</p>
        <p class="terminal">cd darkmode</p>
        <p>Una vez dentro de la carpeta instalamos las dependencias.</p>
        <p class="terminal">npm install</p>
        <p>
          Ahora abrimos el proyecto en un editor de codigo (en este caso en VS
          Code)
        </p>
        <p class="terminal">code .</p>
      </div>
      <div class="tutorial-1">
        <h2>2. Primeros pasos.</h2>
        <p>En el archivo App.js vamos a crear un estado para el modo oscuro.</p>
        <p class="terminal">const [darkMode, setDarkMode] = useState(true);</p>
        <p>
          Luego, vamos a crear una función que nos permita cambiar el estado del
          modo oscuro.
        </p>
        <p class="terminal">
          {`const toggleDarkMode = () => {
          setDarkMode(!darkMode);
        }; `}
        </p>
        <p>
          Ahora vamos a crear un botón que nos permita cambiar el estado del
          modo oscuro.
        </p>
        <p class="terminal">
          {`<button onClick={toggleDarkMode}>Toggle Dark Mode</button>`}
        </p>
        <p>
          A continuación, vamos a dar una clase al div principal con la clase
          "App" y una clase adicional "dark-mode" para que cuando le demos click
          al botón cambie el estado a true.
        </p>
        <p class="terminal">
          {`<div className={\`App \${darkMode ? 'dark-mode' : ''}\`}>`}
          <p>
            Ahora vamos a crear una clase en el archivo App.css que nos permita
            cambiar el color de fondo y el color de la letra.
          </p>
          <p class="terminal">
            {`
        .dark-mode {
          background-color: #1e1e1e;
          color: white;
        }
        `}
          </p>
        </p>
      </div>
      <div class="tutorial-1">
        <p>
          Si hemos seguido los pasos correctamente, deberíamos tener algo como
          esto:
        </p>
        <img src="/assets/appdarkmode.png" alt="darkmode" />
        <img src="/assets/appdarkmodecss.png" alt="darkmode" />
      </div>
      <div class="tutorial-1">
        <h2>3. Conclusión</h2>
        <p>
          Como puedes ver, añadir el modo oscuro a tu aplicación de React es
          bastante sencillo. No necesitas de ninguna librería externa para
          implementarlo. Si tienes alguna duda, no dudes en dejarme un
          comentario.
        </p>
        <img src="/assets/darkmodegif.gif" alt="darmodegif" />
      </div>
    </div>
  );
};

export default DarkMode;
