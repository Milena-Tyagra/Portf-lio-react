import React from "react"

import Title from "../information/Title"

export default function Footer() {
  return (
    <div className="flex items-center justify-around bg-primary-300 w-full">
      <Title
        text="Desenvolvido por Milena Tyagra"
        size="text-base md:text-2xl"
      />
    </div>
  )
}
