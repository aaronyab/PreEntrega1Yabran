import { NavLinks } from "./NavLinks"
import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <header className="bg-indigo-500 border-b-4 border-amber-400 ">
            <div className="container m-auto flex justify-between py-6 items-center">
                <h1 className="text-amber-400 text-2xl uppercase font-bold ml-4 "> YabShop <span className="block text-base font-medium text-white lowercase">Clothes</span></h1>
                <nav className="flex md:flex-row flex-col m-auto items-center gap-7 ">
                    <NavLinks href={"#"} text={"Home"} />
                    <NavLinks href={"#"} text={"Tienda"}/>
                    <NavLinks href={"#"} text={"Nosotros"} />
                      
                </nav>
                <CartWidget href="#" number={4}/>
            </div>
        </header>
    )
}
