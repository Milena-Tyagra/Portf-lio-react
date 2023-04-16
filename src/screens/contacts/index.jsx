import React from "react"

import InfoCard from "../../components/information/InfoCard"
import Contact from "./components/Contact"

import { contacts } from "./data"

export default function Contacts() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[90%] my-7 flex flex-col gap-y-5">
        <InfoCard
          size="big"
          title="Entre em contato"
          personalizedClasses="grid grid-cols-1 lg:grid-cols-2 gap-y-5"
        >
          {contacts.map((contact) => (
            <Contact
              key={`contact-${contact.code}`}
              link={contact.link}
              plataform={contact.plataform}
              contact={contact.contact}
            />
          ))}
        </InfoCard>
      </div>
    </div>
  )
}
