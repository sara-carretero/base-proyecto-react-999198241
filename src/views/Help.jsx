import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"

const Help = () => {


  return (
    <>
      <header className="header">
        <nav>
          <Link to="/chat" id="linkChat">←</Link>
          <h2 id="title">Documentación</h2>
        </nav>
      </header>
      <main className="info">
        <div id="logo-introduction">
          <img width={100} src={logo} alt="logo de whatsapp" />
          <h1>Clon de Whatsapp</h1>
          <p>Esta aplicación simula una interfaz de una mensajería simple entre usuarios.</p>
        </div>
        <section className="general operation">
          <h3 className="title-item">🚀 Funcionamiento general</h3>
          <div className="box-conteiner">
            <div className="box-item">
              <h3>📩 Sistema de Mensajería</h3>
              <p>La aplicación permite a los usuarios enviar y recibir mensajes en tiempo real. Cada mensaje incluye el texto del contenido y una marca de tiempo que indica cuándo fue enviado.</p>
            </div>
            <div className="box-item">
              <h3>👤Gestión de Usuarios</h3>
              <p>El sistema mantiene una lista de usuarios con sus respectivos perfiles. Cada usuario tiene un avatar, nombre y estado de última conexión. Los usuarios pueden seleccionar con quién desean chatear desde la lista de contactos.</p>
            </div>
            <div className="box-item">
              <h3>🗳️Persistencia de Datos</h3>
              <p>Todos los mensajes y datos de usuario se almacenan localmente en el navegador mediante localStorage. Esto significa que tus conversaciones permanecen guardadas incluso después de cerrar la aplicación, siempre que uses el mismo navegador.</p>
            </div>
            <div className="box-item">
              <h3>✅Autenticación</h3>
              <p>El sistema incluye un mecanismo de inicio de sesión que verifica las credenciales del usuario. Una vez autenticado, el estado de sesión se mantiene hasta que el usuario decide cerrar sesión explícitamente.</p>
            </div>
            <div className="box-item">
              <h3>🚪 Cerrar sesión:</h3>
              <p>El usuario puede cerrar sesión haciendo clic en el botón correspondiente, lo que elimina el estado de login almacenado en localStorage y redirige al inicio.</p>
            </div>
            <div className="box-item">
              <h3>⚙️Configuración y Ayuda:</h3>
              <p>El chat cuenta con un botón de configuración que permite acceder a temas personalizables. Además, cuenta con un botón que redirige al usuario a la página de Ayuda, la cual contiene información general del sistema.</p>
            </div>
          </div>

          <section className="general functions">
            <h4>💡 Cómo funciona</h4>
            <ol>
              <li>
                <p><span>Login:</span>Inicia sesión para acceder a tu lista de contactos.</p>
              </li>
              <li>
                <p><span>Selección:</span>Elige un contacto de tu lista para iniciar una conversación.</p>
              </li>
              <li>
                <p><span>Conversación:</span>Envía mensajes que se guardan automáticamente en tu navegador.</p>
              </li>
              <li>
                <p><span>Configuración:</span>Modifica el tema del chat, nombre de usuario e idioma del sistema. Los cambios se verán reflejados incluso después de cerrar la aplicación.</p>
              </li>
              <li>
                <p><span>Persistencia: </span>Tus mensajes y la sesión permanecen disponibles incluso después de cerrar el navegador.</p>
              </li>

            </ol>
          </section>

        </section>
        <section className="general technologies">
          <div className="title-item">
            <h3>🛠️Tecnologías utilizadas</h3>
          </div>
          <div className="box-conteiner">
            <div className="box-item interactive">
              <h3>⚛️ React</h3>
              <p>Biblioteca para interfaces de usuario</p>
            </div>
            <div className="box-item interactive">
              <h3>🎨 CSS</h3>
              <p>Estilos y animaciones visuales.</p>
            </div>
            <div className="box-item interactive">
              <h3>🧭React Router</h3>
              <p>Navegación entre páginas</p>
            </div>
            <div className="box-item interactive">
              <h3>💾LocalStorage</h3>
              <p>Persistencia de datos</p>
            </div>
          </div>

        </section>

        <section className="general upgrade">
          <div className="title-item">
            <h3>🌟Posibles mejoras futuras</h3>
          </div>

          <div className="box-conteiner">
            <div className="box-item">
              <h3>🖥️Persistencia en servidor</h3>
              <p> Almacenar los usuarios y mensajes en una base de datos en lugar de localStorage permitiría mantener los datos incluso desde diferentes dispositivos. para almacenar mensajes de forma permanente y sincronizar entre dispositivos.</p>
            </div>
            <div className="box-item">
              <h3>🔑 Autenticación real</h3>
              <p> Agregar un sistema de login/registro con autenticación para permitir inicio de sesión con Google, GitHub o Facebook, además de autenticación básica de Usuario y Constraseña.</p>
            </div>
            <div className="box-item">
              <h3>🖼️ Soporte multimedia</h3>
              <p> Permitir el envío de imágenes, videos, audios y archivos adjuntos en las conversaciones.</p>
            </div>
            <div className="box-item">
              <h3>🔔 Notificaciones</h3>
              <p>  Añadir notificaciones del navegador en tiempo real para alertar a los usuarios cuando reciban nuevos mensajes, incluso si la aplicación está en segundo plano.</p>
            </div>
            <div className="box-item">
              <h3>🗯️Indicadores de Estado</h3>
              <p> Mostrar indicadores visuales como "escribiendo...", "en línea", "mensajes leídos" con doble check, etc.</p>
            </div>
            <div className="box-item">
              <h3>🔎 Búsqueda de Mensajes</h3>
              <p> Agregar funcionalidad de búsqueda para encontrar mensajes específicos dentro de las conversaciones por palabras clave o fechas.</p>
            </div>
            <div className="box-item">
              <h3>👥 Soporte multiconversación</h3>
              <p> Permitir la creación de chats grupales donde múltiples usuarios puedan participar en una misma conversación.</p>
            </div>
            <div className="box-item">
              <h3>👁️‍🗨️ Cifrado End-to-End</h3>
              <p>  Implementar cifrado de extremo a extremo para garantizar que solo los participantes de la conversación puedan leer los mensajes.</p>
            </div>
            <div className="box-item">
              <h3>🪄 Temas y Personalización</h3>
              <p> Permitir al usuario personalizar la apariencia de la aplicación con colores y diseños personalizados.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="help-footer">
        <p> Clon de Whatsapp </p>
        <p>&copy; 2025 Proyecto frontend - Curso Fullstack UTN</p>
      </footer>

    </>
  )
}

export default Help