import React from "react"

export default function Experience({ company, period, info }) {
  return (
    <div className="flex flex-col">
      <span className="uppercase">{company}</span>
      <span>{period}</span>
      <span className="ml-5 mt-2">{info}</span>
    </div>
  )
}
