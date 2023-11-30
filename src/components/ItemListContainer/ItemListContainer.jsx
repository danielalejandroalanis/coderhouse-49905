
//Props: son argumentos que se pasan al componente desde su componente padre
const ItemListContainer = ({greeting, propiedadPrueba}) => {
  return (
    <div>{greeting} {propiedadPrueba}</div>
  )
}

export default ItemListContainer