import React, { useState } from "react"

import ModalWpp from "./ModalWpp"

import githubLogo from "../../../assets/github.png"
import linkedinLogo from "../../../assets/ld.png"
import instagramLogo  from "../../../assets/insta.jpeg"
import emailLogo from "../../../assets/gmail.png"
import whatsappLogo from "../../../assets/telefone.jpeg"

export default function Contact({plataform, contact, link }) {
  const [isModalWppOpen, setIsModalWppOpen] = useState(false)

  const logo = () => {
    switch (plataform) {
      case "github":
        return githubLogo
      case "linkedin":
        return linkedinLogo
      case "instagram":
        return instagramLogo
      case "email":
        return emailLogo
      case "whatsapp":
        return whatsappLogo
      default:
        return ""
    }
  }

  const renderContact = () => {
    if (plataform === "whatsapp") {
      return (
        <span
          onClick={() => setIsModalWppOpen(true)}
          className="cursor-pointer text-2xl"
        >
          {contact}
        </span>
      )
    } else if (plataform === "email") {
      return (
        <span className="text-2xl">
          {contact}
        </span>
      )
    } else {
      return (
        <a href={link} target="_blank" className="text-2xl">
          {contact}
        </a>
      )
    }

  }
  return (
    <div className="flex gap-x-5 items-center">
      {isModalWppOpen && <ModalWpp onClose={() => setIsModalWppOpen(false)} />}
      <img className="h-[50px]" src={logo()} alt="Logo da instituição" />
      <div>{renderContact()}</div>
    </div>
  )
}
