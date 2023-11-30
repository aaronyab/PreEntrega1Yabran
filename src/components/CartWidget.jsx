
import Logo from "../assets/logo.png"
export const CartWidget = ({number}) => {
  return (
   
   <a className="flex mx-4 text-white  gap-1 " href="#"> <img  src={Logo} alt="cart" />
    {number}
   </a>
   
)}
