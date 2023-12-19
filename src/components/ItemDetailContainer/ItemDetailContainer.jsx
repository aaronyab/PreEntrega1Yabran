import { useEffect, useState } from "react"
import { pedirDatos } from "../../Practica/util"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"


export const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        pedirDatos()
        .then(data => {
            setItem(data.find(prod => prod.id === Number(itemId)    ))

        })
        .finally(() => setLoading(false))
    }, [])


  return (
    <> {


        loading ?
        <h2 className="text-center  text-4xl mt-14"> Cargando... </h2>
        : <ItemDetail item={item} />
    } 
    
    
    
    </>
  )
}
