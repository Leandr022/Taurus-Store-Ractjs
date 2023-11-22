import {useCounter} from "../../hooks/useCounter.js"


export const ItemCounter = (initial=1, stock=6, onAdd) => {
    const {counter , handleRestar , handleSumar} = useCounter(initial, stock)

    const handleOnAdd = () =>{
        onAdd (counter)
    }


    return (
        <div className="w-25">
            <button className='btn btn-outline-dark' onClick={handleSumar}>+</button>
            <button className='btn btn-outline-dark' onClick={handleRestar}>-</button>
            <button className='btn btn-outline-dark' onClick={handleOnAdd}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCounter