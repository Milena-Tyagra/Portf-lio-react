import React from "react"

import { Tag } from "antd"

export default function Project({ description, tecnologies, repository_link, aplication_link }) {
  return (
    <section>
      <span>{description}</span>
      <br />
      <br />
      <span>
        <strong>Tecnologias:</strong>
        <div className="flex flex-wrap gap-y-1">
          {tecnologies.map((tec, i) => <Tag key={`tec-${i}`}color="magenta">{tec}</Tag>
          )}
        </div>
      </span>
      <br />
      <span>
        <a href={repository_link}>
          <strong>Repositório GitHub</strong>
        </a>
        <br />
        <a href={aplication_link}>
          <strong>Aplicação rodando</strong>
        </a>
      </span>
    </section>
  )
}
