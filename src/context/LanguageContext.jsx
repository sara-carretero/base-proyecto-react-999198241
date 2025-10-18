//Importo hooks de react que vamos a utilizar
import { createContext, useContext, useEffect, useState } from "react"

//Defino y creo el contexto
const LanguageContext = createContext()

const TEXTS = {
  es: {
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

    //Popup
    popupTitle: "Configuración",
    themeLabel: "Tema",
    themeDark: "🌙Oscuro",
    themeLight: "☀️Claro",
    renameUserLabel: "Nombre de Usuario",
    renameUserInput: "Nuevo nombre",
    languageLabel: "Idioma",
    languageSpanish: "Español",
    languageEnglish: "Inglés",
    popupSaveBtn: "Guardar cambios",

    //Help
    helpTitle: "Documentación",
    helpBackBtn: "Volver al Chat",
    helpFooter: "Proyecto frontend - Curso Fullstack UTN",

    language: "Español", homeTitle: "Inicio", profileTitle: "Perfil", toggleBtn: "Cambiar a Inglés"
  },
  en: {
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

    //Popup
    popupTitle: "Settings",
    themeLabel: "Theme",
    themeDark: "🌙Dark",
    themeLight: "☀️Light",
    renameUserLabel: "User Name",
    renameUserInput: "Rename",
    languageLabel: "Language",
    languageSpanish: "Spanish",
    languageEnglish: "English",
    popupSaveBtn: "Save settings",

    //Help
    helpTitle: "Documentation",
    helpBackBtn: "Retur to Chat",
    helpFooter: "Frontend Project - Fullstack UTN Course",


    language: "Ingles", homeTitle: "Home", profileTitle: "Profile", toggleBtn: "Switch to Spanish"
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