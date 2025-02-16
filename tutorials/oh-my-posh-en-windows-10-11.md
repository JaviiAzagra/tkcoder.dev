---
title: "Como instalar Oh my Posh en Windows 10/11"
date: "12-02-2025"
description: "En este tutorial te mostraré cómo instalar Oh My Posh en Windows 10/11 y cómo configurarlo para que se ejecute automáticamente cada vez que abras una nueva ventana de PowerShell."
keywords: ["PowerShell", "Windows"]
---

<html>

<p>Oh My Posh es un marco de trabajo (framework) para la personalización del prompt de la línea de comandos en PowerShell. Proporciona una forma sencilla de mejorar y personalizar la apariencia y funcionalidad del prompt de PowerShell, permitiéndote agregar información útil como el estado del repositorio de git, el entorno de la máquina, el usuario actual, la hora, entre otros detalles, de una manera visualmente atractiva y funcional.</p>
</br>
<p>En este tutorial te mostraré cómo instalar Oh My Posh en Windows 10/11 y cómo configurarlo para que se ejecute automáticamente cada vez que abras una nueva ventana de PowerShell.</p>
</br>

<div class="section">

  <div class="container">
    <h1>1. Instalar Windows Terminal</h1>
    <p>Si aún no tienes instalado Windows Terminal, puedes descargarlo desde la tienda de aplicaciones de Windows o desde el siguiente enlace <a href="https://apps.microsoft.com/detail/9n0dx20hk701?hl=es-ES&gl=ES" target="_blank">(link)</a>.</p>
  </div>

  <div class="container">
    <h1>2. Instalar PowerShell</h1>
    <p>Si aún no tienes instalado PowerShell, puedes descargarlo desde la tienda de aplicaciones de Windows o desde el siguiente enlace <a href="https://apps.microsoft.com/detail/9mz1snwt0n5d?hl=es-es&gl=ES" target="_blank">(link)</a>.</p>
  </div>

  <div class="container">
    <h1>3. Establecer PowerShell como predeterminado</h1>
    <p>Abre Windows Terminal y selecciona PowerShell como la terminal predeterminada.</p>
  </div>

  <div class="container">
    <h1>4. Instalar Oh My Posh</h1>
    <p>Abre una nueva ventana de PowerShell y ejecuta el siguiente comando para instalar Oh My Posh:</p>
    <code>winget install JanDeDobbeleer.OhMyPosh -s winget</code>
  </div>

  <div class="container">
    <h1>5. Configurar Oh My Posh</h1>
    <p>Una vez que Oh My Posh esté instalado, puedes configurarlo para que se ejecute automáticamente cada vez que abras una nueva ventana de PowerShell. Para hacer esto, abre tu perfil de PowerShell ejecutando el siguiente comando:</p>
    <code>notepad $PROFILE</code>
    <p>Cuando el comando anterior dé un error, asegúrese de crear el perfil primero y luego ejecuta el comando anterior.</p>
    <code>New-Item -Path $PROFILE -Type File -Force</code>
    <p>Esto abrirá tu perfil de PowerShell en el editor de texto Notepad. Si no tienes un perfil de PowerShell, Notepad te preguntará si deseas crear uno. Haz clic en "Sí" para crear un nuevo perfil.</p>
    <p>Una vez que tu perfil de PowerShell esté abierto en Notepad, agrega el siguiente comando para cargar Oh My Posh automáticamente cada vez que abras una nueva ventana de PowerShell:</p>
    <code>oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/probua.minimal.omp.json" | Invoke-Expression</code>
  </div>

  <div class="container">
    <h1>6. Guardar y cerrar</h1>
    <p>Guarda tu perfil de PowerShell en Notepad y ciérralo. A partir de ahora, Oh My Posh se ejecutará automáticamente cada vez que abras una nueva ventana de PowerShell.</p>
  </div>

  <div class="container">
    <h1>7. Personalizar Oh My Posh</h1>
    <p>Puedes personalizar Oh My Posh cambiando el tema predeterminado o creando tu propio tema. Para cambiar el tema predeterminado, abre tu perfil de PowerShell en Notepad y cambia el nombre del archivo de tema en el comando que agregaste anteriormente. Por ejemplo, si quieres cambiar el tema a "paradox", el comando se vería así:</p>
    <code>oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/paradox.omp.json" | Invoke-Expression</code>
    <p>Si quieres crear tu propio tema, puedes hacerlo siguiendo las instrucciones en la documentación oficial de Oh My Posh (link).</p>
  </div>

  <div class="container">
    <h1>8. Disfruta de tu nuevo prompt</h1>
    <p>¡Eso es todo! Ahora tienes Oh My Posh instalado y configurado en tu sistema. Disfruta de tu nuevo prompt de PowerShell con información útil y un aspecto visualmente atractivo.</p>
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

</style>
