import { Link } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import logo from "../assets/images/logo.png"

const Help = () => {

  const { text, language, toggleLanguage } = useLanguage()


  return (
    <>
      <header className="header">
        <nav>
          <Link to="/chat" id="linkChat" title={text.helpBackBtn}>←</Link>
          <h2 id="title">{text.helpTitle}</h2>
        </nav>
      </header>
      <main className="info">
        <div id="logo-introduction">
          <img width={100} src={logo} alt="logo de whatsapp" />
          <h1>Clon de Whatsapp</h1>
          <p>{text.description}</p>
        </div>
        <section className="general operation">
          <h3 className="title-item">🚀 {text.titleA}</h3>
          <div className="box-conteiner">
            <div className="box-item">
              <h3>📩 {text.titleA1}</h3>
              <p>{text.a1}</p>
            </div>
            <div className="box-item">
              <h3>👤{text.titleA2}</h3>
              <p>{text.a2}</p>
            </div>
            <div className="box-item">
              <h3>🗳️{text.titleA3}</h3>
              <p>{text.a3}</p>
            </div>
            <div className="box-item">
              <h3>✅{text.titleA4}</h3>
              <p>{text.a4}</p>
            </div>
            <div className="box-item">
              <h3>🚪{text.titleA5}</h3>
              <p>{text.a5}</p>
            </div>
            <div className="box-item">
              <h3>⚙️{text.titleA6}</h3>
              <p>{text.a6}</p>
            </div>
          </div>

          <section className="general functions">
            <h4>💡{text.titleB}</h4>
            <ol>
              <li>
                <p><span>{text.span1}</span>{text.li1}</p>
              </li>
              <li>
                <p><span>{text.span2}</span>{text.li2}</p>
              </li>
              <li>
                <p><span>{text.span3}</span>{text.li3}</p>
              </li>
              <li>
                <p><span>{text.span4}</span>{text.li4}</p>
              </li>
              <li>
                <p><span>{text.span5} </span>{text.li5}</p>
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
              <p>{text.c1}</p>
            </div>
            <div className="box-item interactive">
              <h3>🎨 CSS</h3>
              <p>{text.c2}</p>
            </div>
            <div className="box-item interactive">
              <h3>🧭React Router</h3>
              <p>{text.c3}</p>
            </div>
            <div className="box-item interactive">
              <h3>💾LocalStorage</h3>
              <p>{text.c4}</p>
            </div>
          </div>

        </section>

        <section className="general upgrade">
          <div className="title-item">
            <h3>🌟{text.titleD}</h3>
          </div>

          <div className="box-conteiner">
            <div className="box-item">
              <h3>🖥️{text.titleD1}</h3>
              <p>{text.d1}</p>
            </div>
            <div className="box-item">
              <h3>🔑 {text.titleD2}</h3>
              <p>{text.d2}</p>
            </div>
            <div className="box-item">
              <h3>🖼️ {text.titleD3}</h3>
              <p>{text.d3}</p>
            </div>
            <div className="box-item">
              <h3>🔔 {text.titleD4}</h3>
              <p>{text.d4}</p>
            </div>
            <div className="box-item">
              <h3>🗯️{text.titleD5}</h3>
              <p>{text.d5}</p>
            </div>
            <div className="box-item">
              <h3>🔎 {text.titleD6}</h3>
              <p>{text.d6}</p>
            </div>
            <div className="box-item">
              <h3>👥 {text.titleD7}</h3>
              <p>{text.d7}</p>
            </div>
            <div className="box-item">
              <h3>👁️‍🗨️ {text.titleD8}</h3>
              <p>{text.d8}</p>
            </div>
            <div className="box-item">
              <h3>🪄 {text.titleD9}</h3>
              <p>{text.d9}</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="help-footer">
        <p> Clon de Whatsapp </p>
        <p>&copy; {text.helpFooter}</p>
      </footer>

    </>
  )
}

export default Help