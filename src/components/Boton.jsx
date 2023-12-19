import { Children } from "react"


export const Boton = ({children, className = "",onClick}) => {
  return (
    <button onClick={onClick} className={`bg-indigo-500 px-3 py-1 uppercase text-white font-semibold rounded-sm ${className}`}> {children}  </button>
  )
}
