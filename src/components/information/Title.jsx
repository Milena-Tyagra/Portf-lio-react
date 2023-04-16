import React from "react"

export default function Title(props) {
  const { text, size } = props
  const sizes = {
    big: "text-6xl",
    medium: "text-2xl",
    small: "text-2xl",
  }
  return <span className={`font-bold text-primary-400 ${size}`}>{text}</span>
}
