import { Link } from "react-router-dom"
import '../styles/help.css'

export default function Help() {
  return (
    <section>
      <h2>Página Help</h2>
      <Link to="/chat">Volver al chat</Link>
    </section>
  )
}