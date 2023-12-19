
import { CartWidget } from "./CartWidget"
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <header className="bg-indigo-500 border-b-2 border-amber-400 ">

            <div className="container m-auto flex justify-between py-6 items-center">

               <h1  className="text-amber-400 text-2xl uppercase font-bold ml-4 ">
                <Link to={"/"}> YabShop
                <span className="block text-base font-medium text-white lowercase">Clothes</span> </Link>
                </h1> 

                <nav className="flex md:flex-row flex-col m-auto items-center gap-7 ">

                    <Link to={"/"} className="text-white text-base hover:text-amber-400 uppercase font-medium"> Inicio </Link>
                    <Link to={"/productos/Men"} className="text-white text-base hover:text-amber-400 uppercase font-medium"> Men </Link>
                    <Link to={"/productos/Women"} className="text-white text-base hover:text-amber-400 uppercase font-medium"> Women </Link>
                    <Link to={"/productos/Accesorios"} className="text-white text-base hover:text-amber-400 uppercase font-medium"> Accesorios </Link>

                </nav>
                <CartWidget href="#" number={4} />
            </div>
        </header>
    )
}
