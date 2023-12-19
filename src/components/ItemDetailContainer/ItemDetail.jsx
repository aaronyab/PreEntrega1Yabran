import { Boton } from "../Boton"
import { Navigate, useNavigate } from "react-router-dom"


export const ItemDetail = ({ item }) => {
    const navigate = useNavigate()
    const volver = () => {
        navigate(-1)
    }
    return (
        <div className="container m-auto mt-8 ">
            <Boton className="hover:bg-indigo-600 my-2 mx-2" onClick={volver}> Volver </Boton>
            <h3 className="text-2xl text-center  mt-3 font-semibold">{item.name}</h3>

            <div className="flex flex-wrap mb-10 text-center  justify-center gap-10 items-center">
                <img src={item.img} alt={item.name} />
                <div>



                    <hr />
                    <p>{item.description}</p>
                    <p className="text-xl mt-3 font-bold">Precio: ${item.price}</p>


                    <Boton className="mt-3 hover:bg-indigo-600">  Agregar al carrito </Boton>
                </div>
            </div>

        </div>
    )
}
