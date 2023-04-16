import React from "react"

export default function InfoCard({
  size,
  title,
  info,
  personalizedClasses = "",
  children,
}) {
  const sizeClasses = {
    big: "w-full",
    small: "w-[90%]",
  }
  return (
    <div className={sizeClasses[size]}>
      <span className="ml-2 bg-white px-2 rounded-md border-4 border-primary-300 text-primary-400 font-bold text-2xl">
        {title}
      </span>
      <div
        className={`bg-primary-200 rounded-lg -mt-3 p-10 text-sm text-secondary ${
          size === "big" ? "w-full" : ""
        }`}
      >
        <span className={personalizedClasses}>{info ?? children}</span>
      </div>
    </div>
  )
}
