import React from "react"

import InfoCard from "../../components/information/InfoCard"
import Experience from "./components/Experiency"
import Certification from "./components/Certification"

export default function Resume({ about, certifications, experiences }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[90%] my-7 flex flex-col gap-y-5">
        <InfoCard size="big" title="Sobre" info={about} />
        <InfoCard
          size="big"
          title="Experiência"
          personalizedClasses="flex flex-col gap-y-5"
        >
          {experiences.map((experience) => (
            <Experience
              key={`experience-${experience.code}`}
              company={experience.company}
              period={experience.period}
              info={experience.info}
            />
          ))}
        </InfoCard>
        <InfoCard
          size="big"
          title="Certificações"
          personalizedClasses="grid grid-cols-1 md:grid-cols-2 gap-y-5"
        >
          {certifications.map((certification) => (
            <Certification
              key={`certification-${certification.code}`}
              place={certification.place}
              title={certification.title}
            />
          ))}
        </InfoCard>
      </div>
    </div>
  )
}
