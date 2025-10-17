import { useState } from "react"
import { useChat } from "../context/ChatContext"
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext"
import { Link, useNavigate } from "react-router-dom"

export default function Chat() {
  const [msg, setMsg] = useState("")
  const [name, setName] = useState()
  const [showPopup, setShowPopup] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { text, toggleLanguage } = useLanguage()

  // 1. Obtenemos del contexto todo lo necesario
  const { users, selectedUser, setUsers } = useChat()


  // 2. Buscamos el usuario activo
  const user = users.find(u => u.id === selectedUser)

  const navigate = useNavigate()

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
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  const handleRename = (event) => {
    setName(event.target.value)
  }

  const handleSave = (event) => {
    event.preventDefault()

    const newName = name

    if (newName.length > 0) {
      const updatedUsers = users.map(u =>
        u.id === user.id
          ? { ...u, name: [newName] }
          : u
      )
      setUsers(updatedUsers)
    }

    setName("")

  }

  const handleLanguage = (event) => {
    console.log(event.target.value)
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
              <label className="switch">
                <input type="checkbox" className="input" onChange={toggleTheme} />
                {theme === "dark" ? "light" : "dark"}
                <div className="rail">
                  <span className="circle"></span>
                </div>
                <span className="indicator"></span>
              </label>
            </div>

            <div id="changeName">
              <label><h4>{text.renameUserLabel}</h4></label>
              <input
                type="text"
                placeholder="Rename"
                onChange={handleRename}
                value={name}
              />
            </div>
            <div id="changeLanguage">
              <label><h4>{text.languageLabel}</h4></label>
              <select name="" id="selector" onChange={toggleLanguage}>
                <option value="en">{text.languageEnglish}</option>
                <option value="es">{text.languageSpanish}</option>
              </select><br></br>
            </div>
            <div className="cont-btn-save">
              <button id="btn-save" onClick={handleSave}>{text.popupSaveBtn}</button>
            </div>
          </div>
        </section>
      }
      <div className="chat">
        <header className="chat-header">
          <div>
            <div className="chat-user">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
                alt={user.name}
                className="chat-avatar"
              />
              <strong>{user.name}</strong>
              {user.lastSeen !== "" && <span className="last-seen">{text.lastSeen} {user.lastSeen}</span>}
            </div>
          </div>

          <div className="chat-actions">
            <button title={text.cameraBtn}>📷</button>
            <button title={text.galleryBtn}>🖼️</button>
            <button title={text.settingsBtn} onClick={handleShowPopup}>⚙️</button>
            <Link title={text.helpBtn} to="/help" id="linkHelp">❓</Link>
            <button title={text.signoutBtn} onClick={handleLogout}>🚪</button>
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

