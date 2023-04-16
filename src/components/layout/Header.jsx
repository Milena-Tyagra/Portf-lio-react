import React from "react"

import perfil from "../../assets/perfil.jpg"

import Title from "../information/Title"

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around bg-primary-100 w-full">
      <div className="w-[20vw] flex justify-center">
        <img
          className="w-[200px] rounded-full my-5"
          src={perfil}
          alt="Foto de perfil da desenvolvedora"
        />
      </div>
      <div className="w-[80vw] flex flex-col items-center">
        <Title text="Milena Tyagra" size="text-3xl md:text-6xl" />
        <Title text="Full stack-developer" size="text-2xl md:text-6xl" />
      </div>
    </div>
  )
}
