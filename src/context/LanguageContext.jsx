//Importo hooks de react que vamos a utilizar
import { createContext, useContext, useEffect, useState } from "react"

//Defino y creo el contexto
const LanguageContext = createContext()

const TEXTS = {
  es: {
    language: "Español",
    //Login
    passwordLabel: "Iniciar sesión",
    passwordInput: "Ingrese la contraseña",
    accessBtn: "Acceder",
    passwordCorrect: "Contraseña valida, serás redirigido.",
    passwordError: "Contraseña invalida, intentelo nuevamente",
    textInfo: "Acceso restringido • Contenido privado",

    //Sidebar
    searchInput: "Buscar...",
    searchResult: "No se encontró ninguna búsqueda...",

    //Contacts
    statusOn: "En linea",
    statusOff1: "3 horas atrás",
    statusOff2: "úl. vez hace 1 minuto atrás",
    lastSeen: "Últ. vez:",

    //Chat
    userNotFound: "No hay usuario seleccionado...",
    viewContactsBtn: "Ver contactos",
    cameraBtn: "Cámara",
    galleryBtn: "Galería",
    settingsBtn: "Configuración",
    helpBtn: "Ayuda",
    signoutBtn: "Cerrar sesión",
    msjInput: "Ingrese texto aquí...",
    menuBtn: "Menú",

    //Popup
    popupTitle: "Configuración",
    themeLabel: "Tema",
    themeDark: "Oscuro",
    themeLight: "Claro",
    renameUserLabel: "Nombre de Usuario",
    renameUserInput: "Nuevo nombre de Usuario",
    languageLabel: "Idioma",
    languageSpanish: "Español",
    languageEnglish: "Inglés",
    popupSaveBtn: "Guardar cambios",


    //---------------------------------------------------------
    //Help

    //Header
    helpTitle: "Documentación",
    helpBackBtn: "Volver",

    //Main
    description: "Esta aplicación simula una interfaz de una mensajería simple entre usuarios.",

    //Funcionamiento general
    titleA: "Funcionamiento general",
    titleA1: "Sistema de Mensajería",
    a1: "La aplicación permite a los usuarios enviar y recibir mensajes en tiempo real. Cada mensaje incluye el texto del contenido y una marca de tiempo que indica cuándo fue enviado.",
    titleA2: "Gestión de Usuarios",
    a2: "El sistema mantiene una lista de usuarios con sus respectivos perfiles. Cada usuario tiene un avatar, nombre y estado de última conexión. Los usuarios pueden seleccionar con quién desean chatear desde la lista de contactos.",
    titleA3: "Persistencia de Datos",
    a3: "Todos los mensajes y datos de usuario se almacenan localmente en el navegador mediante localStorage. Esto significa que tus conversaciones permanecen guardadas incluso después de cerrar la aplicación, siempre que uses el mismo navegador.",
    titleA4: "Autenticación",
    a4: "El sistema incluye un mecanismo de inicio de sesión que verifica las credenciales del usuario. Una vez autenticado, el estado de sesión se mantiene hasta que el usuario decide cerrar sesión explícitamente.",
    titleA5: "Cerrar sesión",
    a5: "El usuario puede cerrar sesión haciendo clic en el botón correspondiente, lo que elimina el estado de login almacenado en localStorage y redirige al inicio.",
    titleA6: "Configuración y Ayuda",
    a6: "El chat cuenta con un botón de configuración que permite acceder a temas personalizables. Además, cuenta con un botón que redirige al usuario a la página de Ayuda, la cual contiene información general del sistema.",

    //Como funciona
    titleB: "Cómo funciona",
    span1: "Iniciar sesión:",
    li1: "Inicia sesión para acceder a tu lista de contactos.",
    span2: "Selección:",
    li2: "Elige un contacto de tu lista para iniciar una conversación.",
    span3: "Conversación:",
    li3: "Envía mensajes que se guardan automáticamente en tu navegador.",
    span4: "Configuración:",
    li4: "Modifica el tema del chat, nombre de usuario e idioma del sistema. Los cambios se verán reflejados incluso después de cerrar la aplicación.",
    span5: "Persistencia: ",
    li5: "Tus mensajes y la sesión permanecen disponibles incluso después de cerrar el navegador.",

    //Tecnologías utilizadas
    titleC: "Tecnologías utilizadas",
    c1: "Biblioteca para interfaces de usuario",
    c2: "Estilos y animaciones visuales.",
    c3: "Navegación entre páginas",
    c4: "Persistencia de datos",

    //Posibles mejoras futuras
    titleD: "Posibles mejoras futuras",
    titleD1: "Persistencia en servidor",
    d1: "Almacenar los usuarios y mensajes en una base de datos en lugar de localStorage permitiría mantener los datos incluso desde diferentes dispositivos. para almacenar mensajes de forma permanente y sincronizar entre dispositivos.",
    titleD2: "Autenticación real",
    d2: "Agregar un sistema de login/registro con autenticación para permitir inicio de sesión con Google, GitHub o Facebook, además de autenticación básica de Usuario y Constraseña.",
    titleD3: "Soporte multimedia",
    d3: "Permitir el envío de imágenes, videos, audios y archivos adjuntos en las conversaciones.",
    titleD4: "Notificaciones",
    d4: "Añadir notificaciones del navegador en tiempo real para alertar a los usuarios cuando reciban nuevos mensajes, incluso si la aplicación está en segundo plano.",
    titleD5: "Indicadores de Estado",
    d5: "Mostrar indicadores visuales como 'escribiendo...', 'en línea', 'mensajes leídos' con doble check, etc.",
    titleD6: "Búsqueda de Mensajes",
    d6: "Agregar funcionalidad de búsqueda para encontrar mensajes específicos dentro de las conversaciones por palabras clave o fechas.",
    titleD7: "Soporte multiconversación",
    d7: "Permitir la creación de chats grupales donde múltiples usuarios puedan participar en una misma conversación.",
    titleD8: "Cifrado End-to-End",
    d8: "Implementar cifrado de extremo a extremo para garantizar que solo los participantes de la conversación puedan leer los mensajes.",
    titleD9: "Temas y Personalización",
    d9: "Permitir al usuario personalizar la apariencia de la aplicación con colores y diseños a elección.",

    //Footer
    helpFooter: "Proyecto frontend - Curso Fullstack UTN",


  },
  en: {
    language: "Ingles",

    //Login
    passwordLabel: "Sign in",
    passwordInput: "Password",
    accessBtn: "Access",
    passwordCorrect: "Valid password, you will be redirected.",
    passwordError: "Invalid password, please try again.",
    textInfo: "Restricted access • Private content",

    //Sidebar
    searchInput: "Search...",
    searchResult: "No search found...",

    //Contacts
    statusOn: "online",
    statusOff1: "3 hours ago",
    statusOff2: "1 minute ago",
    lastSeen: "Last seen:",

    //Chat
    userNotFound: "No user selected...",
    viewContactsBtn: "View contacts",
    cameraBtn: "Camera",
    galleryBtn: "Gallery",
    settingsBtn: "Settings",
    helpBtn: "Help",
    signoutBtn: "Sign out",
    msjInput: "Enter text here...",
    menuBtn: "Menu",

    //Popup
    popupTitle: "Settings",
    themeLabel: "Theme",
    themeDark: "Dark",
    themeLight: "Light",
    renameUserLabel: "User Name",
    renameUserInput: "Rename User",
    languageLabel: "Language",
    languageSpanish: "Spanish",
    languageEnglish: "English",
    popupSaveBtn: "Save settings",

    //---------------------------------------------------------
    //Help

    //Header
    helpTitle: "Documentation",
    helpBackBtn: "Return",

    //Main
    description: "This application simulates a simple messaging interface between users.",

    //Funcionamiento general
    titleA: "General operation",
    titleA1: "Messaging System",
    a1: "The application allows users to send and receive messages in real time. Each message includes the content text and a timestamp indicating when it was sent.",
    titleA2: "User Management",
    a2: "The system maintains a list of users with their respective profiles. Each user has an avatar, a name, and a last-seen status. Users can select who they want to chat with from the contact list.",
    titleA3: "Data persistence",
    a3: "All messages and user data are stored locally in the browser using localStorage. This means that your conversations remain saved even after you close the application, as long as you use the same browser.",
    titleA4: "Authentication",
    a4: "The system includes a login mechanism that verifies the user’s credentials. Once authenticated, the session state is maintained until the user explicitly chooses to log out.",
    titleA5: "Log out",
    a5: "The user can log out by clicking the corresponding button, which removes the login state stored in localStorage and redirects them to the homepage.",
    titleA6: "Settings and Help",
    a6: "The chat has a settings button that allows you to access customizable topics. It also has a button that redirects the user to the Help page, which contains general system information.",

    //Como funciona
    titleB: "How does it work?",
    span1: "Login:",
    li1: "Sign in to access your contact list.",
    span2: "Selection:",
    li2: "Choose a contact from your list to start a conversation.",
    span3: "Conversation:",
    li3: "Send messages that are automatically saved in your browser.",
    span4: "Settings:",
    li4: "Change the chat theme, username, and system language. Changes will be reflected even after you close the app.",
    span5: "Persistence: ",
    li5: "Your messages and session remain available even after you close your browser.",

    //Tecnologías utilizadas
    titleC: "Technologies used",
    c1: "Library for user interfaces.",
    c2: "Visual styles and animations.",
    c3: "Navigation between pages.",
    c4: "Data persistence.",

    //Posibles mejoras futuras
    titleD: "Possible future improvements",
    titleD1: "Server persistence",
    d1: "Storing users and messages in a database instead of localStorage would allow data to be maintained even across different devices. This would allow messages to be stored permanently and synchronized across devices.",
    titleD2: "Real authentication",
    d2: "Add a login/registration system with authentication to allow login with Google, GitHub, or Facebook, in addition to basic username and password authentication.",
    titleD3: "Multimedia support",
    d3: "Allow sending images, videos, audios, and attachments in conversations.",
    titleD4: "Notifications",
    d4: "Add real-time browser notifications to alert users when they receive new messages, even if the app is in the background.",
    titleD5: "Status Indicators",
    d5: "Show visual indicators such as 'typing...', 'online', 'messages read' with double check, etc.",
    titleD6: "Message Search",
    d6: "Add search functionality to find specific messages within conversations by keywords or dates.",
    titleD7: "Multi-conversation support",
    d7: "Allow the creation of group chats where multiple users can participate in the same conversation.",
    titleD8: "End-to-End Encryption",
    d8: "Implement end-to-end encryption to ensure that only the conversation participants can read the messages.",
    titleD9: "Themes and Personalization",
    d9: "Allow the user to customize the appearance of the application with colors and designs of their choice.",

    //Footer
    helpFooter: "Frontend Project - Fullstack UTN Course",



  },
};

//Armo el proveedor del theme
const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState('en') //--> Este es el estado que almacena que theme asignamos

  // Al cargar, leer idioma guardado
  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  // Guardar idioma cuando cambia
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);


  //funcion que alterna 
  const toggleLanguage = () => setLanguage(l => (l === 'es' ? 'en' : 'es'));

  const text = TEXTS[language];

  return (
    <LanguageContext.Provider value={{ language, text, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguage = () => useContext(LanguageContext)

export { useLanguage, LanguageProvider }