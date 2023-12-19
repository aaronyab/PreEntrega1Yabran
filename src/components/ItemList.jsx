import ItemCard from "./ItemCard";


const ItemList = ({productos}) => {

  return (
    <section className="container m-auto mt-8">

      <h2 className="text-4xl text-center sm:text-left font-bold my-8">Productos</h2>
      <hr />

        <div className="flex flex-wrap mb-10   justify-center gap-10 items-center">
            {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
        </div>

    </section>
  );
};

export default ItemList;