---
title: "Añadir Dark Mode en tu página de React"
date: "2024-01-01"
description: "El modo oscuro sería una excelente adición a tu aplicación, ya que enriquecería la experiencia del usuario. En esta ocasión, te mostraré cómo implementarlo en React sin necesidad de utilizar ninguna librería externa."
keywords: ["React", "JavaScript"]
---

<html>

<p>El modo oscuro sería una excelente adición a tu aplicación, ya que enriquecería la experiencia del usuario. En esta ocasión, te mostraré cómo implementarlo en React sin necesidad de utilizar ninguna librería externa.</p>
</br>
<div class="section">

  <div class="container">
    <h1>1. Primero creamos el proyecto.</h1>
    <p>Al proyecto lo llamaremos darkmode (le puedes poner el nombre que quieras).</p>
    <code>npx create-react-app darkmode</code>
  </div>

  <div class="container">
    <h1>2. Primeros pasos.</h1>
    <p>En el archivo App.js vamos a crear un estado para el modo oscuro.</p>
    <code>const [darkMode, setDarkMode] = useState(true);</code>
    <p>Luego, vamos a crear una función que nos permita cambiar el estado del modo oscuro.</p>
    <code>const toggleDarkMode = () => { setDarkMode(!darkMode); };</code>
    <p>Ahora vamos a crear un botón que nos permita cambiar el estado del modo oscuro.</p>
    <code>&lt;button onClick=&#123;toggleDarkMode&#125;&gt;Toggle Dark Mode&lt;/button&gt;</code>
    <p>A continuación, vamos a dar una clase al div principal con la clase "App" y una clase adicional "dark-mode" para que cuando le demos click al botón cambie el estado a true.</p>
    <code>&lt;div className=&#123;`App $&#123;darkMode ? 'dark-mode' : ''&#125;`&#125;&gt;</code>
    <p>Ahora vamos a crear una clase en el archivo App.css que nos permita cambiar el color de fondo y el color de la letra.</p>
    <code>.dark-mode { background-color: #1e1e1e; color: white; }</code>
  </div>

  <div class="container">
    <p>Si hemos seguido los pasos correctamente, deberíamos tener algo como esto:</p>
    <div class="imagenes">
      <img src="/assets/tutorials/darkmode2.png" alt="Imagen App.js con el codigo completo" />
      <img src="/assets/tutorials/darkmode1.png" alt="Imagen App.css con el codigo completo" />
    </div>
  </div>

  <div class="container">
    <h1>3. Conclusión</h1>
    <p>Como puedes ver, añadir el modo oscuro a tu aplicación de React es bastante sencillo. No necesitas de ninguna librería externa para implementarlo. Si tienes alguna duda, no dudes en dejarme un comentario.</p>
    <img src="/assets/tutorials/darkmodegif.gif" alt="Gif pagina con dark mode" />
  </div>
</div>

</html>

<style>

  h1{
    font-size: 30px;
    font-weight: bold;
  }

  .imagenes{
    display: flex;
    gap: 30px;
    flex-direction: column;
  }

  img{
    max-width: 600px;
    height: fit-content;
    border-radius: 8px;
  }

  code{
    background-color: black;
    padding: 10px 15px;
    color: white;
    border-radius: 8px;
    width: fit-content;
  }

  .section{
    display: flex;
    gap: 60px;
    flex-direction: column;
  }

  .container{
    display: flex;
    gap: 10px;
    flex-direction: column;
    border: 1px solid #D5D5D5;
    padding: 1.5rem;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

  }

  border w-full h-[200px] rounded-lg bg-white p-6 shadow-sm shadow-black/50

</style>
