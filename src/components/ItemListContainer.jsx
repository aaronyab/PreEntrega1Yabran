
import { useParams } from "react-router-dom"
import useProductos from "../Practica/useProductos"
import ItemList from "./ItemList"

export const ItemListContainer = () => {

  const { productos, loading } = useProductos()
  const { categoryId } = useParams()

  return (
    <>
      {
        loading ? (
          <h2 className="text-center  text-4xl mt-14"> Cargando... </h2>
         ) : ( <ItemList productos={productos} />
    )}



    </>

  )
}
