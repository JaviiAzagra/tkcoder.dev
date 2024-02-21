import React from "react";
import "./OhMyPosh.scss";

const OhMyPosh = () => {
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
    </div>
  );
};

export default OhMyPosh;
