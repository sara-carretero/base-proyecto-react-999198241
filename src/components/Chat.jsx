import { useEffect, useRef, useState } from "react"
import { useChat } from "../context/ChatContext"
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext"
import { Link, useNavigate } from "react-router-dom"

export default function Chat() {
  // 1. Obtenemos del contexto todo lo necesario
  const { users, selectedUser, setUsers, setSelectedUser } = useChat()
  // 2. Buscamos el usuario activo
  const user = users.find(u => u.id === selectedUser)

  const [msg, setMsg] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { text, language, toggleLanguage } = useLanguage()


  //Guardar cambios temporales del popup previo a guardar cambios.
  const [tempTheme, setTempTheme] = useState(theme)
  const [tempLanguage, setTempLanguage] = useState(language)
  const [tempName, setTempName] = useState(user?.name ?? "")

  const navigate = useNavigate()
  // Cerrar el menú hamburguesa al hacer clic fuera
  const menuRef = useRef(null);
  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMenu && menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  if (!user) {
    return (
      <div className="user-not-found">
        <p>{text.userNotFound}</p>
      </div>
    )
  }


  // 3. Manejo del input
  const handleChange = (event) => {
    setMsg(event.target.value)
  }

  // 4. Cuando enviamos el formulario
  const handleSubmit = (event) => {
    event.preventDefault()

    const newMessage = {
      id: crypto.randomUUID(),
      text: msg,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    // ✅ Actualizamos el estado de manera INMUTABLE
    const updatedUsers = users.map(u =>
      u.id === user.id
        ? { ...u, messages: [...u.messages, newMessage] }
        : u
    )

    setUsers(updatedUsers) // esto dispara el useEffect del contexto que guarda en localStorage

    setMsg("")
  }


  //() => Eliminamos los datos del usuario guardados al cerrar sesión.
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    navigate("/")
  }

  const handleShowPopup = () => {
    setTempTheme(theme)
    setTempLanguage(language)
    setTempName(user.name)

    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  //() => Botón para guardar los cambios de nombre se usuario.
  const handleSave = (e) => {
    e.preventDefault()

    // Aplicar tema
    if (tempTheme !== theme) {
      toggleTheme()
    }

    // Aplicar idioma
    if (tempLanguage !== language) {
      toggleLanguage({ target: { value: tempLanguage } })
    }

    // Guardar nombre
    const newName = tempName.trim()
    if (newName.length > 0 && newName !== user.name) {
      const updatedUsers = users.map(u =>
        u.id === user.id ? { ...u, name: newName } : u
      )
      setUsers(updatedUsers)
    }

    setShowPopup(false)

  }

  //Mostrar menú hamburguesa en momentos responsive.
  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  }


  //Visualizar el sidebar en momentos responsive.
  const handleGoBack = () => {
    setSelectedUser(null) // Esto deselecciona el usuario
  }


  return (
    <>
      {
        showPopup === true && <section className="cont-popup">
          <div className="popup">
            <div id="headerpopup">
              <button onClick={handleClosePopup} id="btn-close">X</button>
            </div>
            <h2>{text.popupTitle}</h2>

            <div className="conteiner">
              <label><h4>{text.themeLabel}</h4></label>
              <div class="cont-switch">
                <label className="switch">
                  <input type="checkbox"
                    className="input"
                    onChange={() => setTempTheme(tempTheme === 'dark' ? 'light' : 'dark')}
                    checked={tempTheme === 'dark'} />
                  {theme === "dark" ? text.themeDark : text.themeLight}
                  <div className="rail">
                  </div>
                  <span className="circle"></span>
                </label>
                <div className="icon">
                  {theme === "dark" ? "🌙" : "☀️"}
                </div>
              </div>

            </div>

            <div id="changeName">
              <label><h4>{text.renameUserLabel}</h4></label>
              <input
                type="text"
                placeholder={text.renameUserInput}
                onChange={(e) => setTempName(e.target.value)}
                value={tempName}
              />
            </div>
            <div id="changeLanguage">
              <label><h4>{text.languageLabel}</h4></label>
              <select
                id="selector"
                value={tempLanguage}
                onChange={(e) => setTempLanguage(e.target.value)} >
                <option value="en">{text.languageEnglish}</option>
                <option value="es">{text.languageSpanish}</option>
              </select><br></br>
            </div>
            <div className="cont-btn-save">
              <button id="btn-save" onClick={handleSave}>{text.popupSaveBtn}</button>
            </div>
          </div>
        </section >
      }
      <div className="chat">
        <header className="chat-header">
          <div>
            <div className="chat-user">
              <button onClick={handleGoBack} className="chat-backBtn" title={text.viewContactsBtn}>
                ←
              </button>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
                alt={user.name}
                className="chat-avatar"
              />
              <div className="user-name">
                <strong>{user.name}</strong>
                {user.lastSeen !== "" && <span className="last-seen">{text.lastSeen} {user.lastSeen}</span>}
              </div>

            </div>
          </div>

          <div className="chat-actions">

            <div className="chat-menu" ref={menuRef}>
              {/* Botón hamburguesa */}
              <button
                className="hamburgerBtn"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                title={text.menuBtn}
              >
                ☰
              </button>

              {/* Opciones del menú */}
              {showMenu && (
                <div className="optionBtn">
                  <button >📷 {text.cameraBtn}</button>
                  <button >🖼️ {text.galleryBtn}</button>
                  <button onClick={handleShowPopup}>⚙️ {text.settingsBtn}</button>
                  <Link to="/help" id="linkHelp">❓{text.helpBtn}</Link>
                  <button onClick={handleLogout}>🚪{text.signoutBtn}</button>
                </div>
              )}
            </div>

            <div className="actionsBtn">
              <button title={text.cameraBtn}>📷</button>
              <button title={text.galleryBtn}>🖼️</button>
              <button title={text.settingsBtn} onClick={handleShowPopup}>⚙️</button>
              <Link title={text.helpBtn} to="/help" id="linkHelp">❓</Link>
              <button title={text.signoutBtn} onClick={handleLogout}>🚪</button>
            </div>

          </div>
        </header>

        <section className="chat-messages">
          {user.messages.map((message) => (
            <div className="message" key={message.id}>
              <p>{message.text}</p>
              <span className="time">{message.time}</span>
            </div>
          ))}
        </section>

        <footer className="chat-footer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={text.msjInput}
              onChange={handleChange}
              value={msg}
            />
            <button>➤</button>
          </form>
        </footer>
      </div>
    </>
  )

}

