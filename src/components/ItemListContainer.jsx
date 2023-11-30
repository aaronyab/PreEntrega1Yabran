

export const ItemListContainer = ({greeting}) => {
  return (
    <div className="container">
        <h2 className="my-5 mx-5 font-semibold flex justify-left"> Productos Destacados</h2>
        <hr />
        <p className="text-black  flex justify-left mx-5 items-center my-3 font-base"> {greeting} </p>
    </div>
    
  )
}
