import React from "react"

import uniasselviLogo from "../../../assets/uniasselvi.jpeg"
import aluraLogo from "../../../assets/alura.jpeg"

export default function Certification({ place, title }) {
  const logo = company => {
    switch (company) {
      case "Uniasselvi":
        return uniasselviLogo;
      case "Alura": 
        return aluraLogo;
      default:
        return ''
    }
  }
  return (
    <div className="flex gap-x-1 items-center">
      <img className="h-[50px]"src={logo(place)} alt="Logo da instituição" />
      <div ></div>
      <div className="flex flex-col">
        <span className="font-bold">{title}</span>
        <span>{place}</span>
      </div>
    </div>
  )
}
