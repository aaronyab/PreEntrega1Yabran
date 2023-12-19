import { Link } from "react-router-dom";
import { Boton } from "./Boton";


const ItemCard = ({ item }) => {

  return (
    <article className="w-2/3 sm:w-80">
      <img src={item.img} alt={item.name} />
      <h3 className="text-2xl mt-3 font-semibold">{item.name}</h3>
      <hr />
      <p>{item.description}</p>
      <p className="text-xl font-bold">Precio: ${item.price}</p>

      <Boton className="mt-3 hover:bg-indigo-600"> <Link to={`/item/${item.id}`}> Ver mas</Link> </Boton>

    </article>
  );
};

export default ItemCard;
