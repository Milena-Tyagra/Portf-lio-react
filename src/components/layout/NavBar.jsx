import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div>
      <nav className=" bg-primary-300 text-primary-400 font-bold text-2xl ">
        <ul className="flex flex-col items-center md:flex-row gap-x-5 justify-center">
          <li>
            <Link to="/">Currículo</Link>
          </li>
          <li>
            <Link to="/projects">Portfólio</Link>
          </li>
          <li>
            <Link to="/contacts">Contato</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
