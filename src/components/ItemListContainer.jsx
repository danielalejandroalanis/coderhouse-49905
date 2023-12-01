const ItemListContainer = ({greeting}) => {

    return (
        <div style={{fontWeight: 'bold', fontSize: '2rem', width: '100vw', height: '50vh', textAlign: 'center'}}>
            {greeting}
        </div>
    )
}

export default ItemListContainer;