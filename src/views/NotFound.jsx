import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <section class="not-found">
      <h1>Oops, página no encontrada</h1>
      <p>No pudimos encontrar la página a donde te dirigias, solo contamos con la posibilidad de trabajar con el chat.</p>
      <Link to="/chat"><i class='bx  bx-arrow-in-left-square-half'  ></i> Ir al chat</Link>
    </section>
  )
}

export { NotFound }