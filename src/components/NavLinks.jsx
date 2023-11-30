

export const NavLinks = ({href, text}) => {
  return (
   <a className="text-white text-base hover:text-amber-400 uppercase font-medium"
   href={href}
   >
    {text}
   </a>
  )
}
