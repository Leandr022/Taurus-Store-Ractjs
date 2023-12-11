import {ItemCounter} from "../../ItemCounter/ItemCounter"
import {useContext, useState} from "react"
import { CartContext } from "../../../contexts/CartContext"
import { Link } from 'react-router-dom'

export const ItemDetail = ({ products } ) => {

    const [isCounter, setIsCounter] = useState (true)
    
    const {addProduct} = useContext(CartContext)

    const onAdd = (cantidad) => {
        console.log(`La cantidad seleccionada es: ${cantidad}`)
        addProduct( {...products, cantidad } )
        setIsCounter(false)
    }

    return (
        <div className="row">
            <div className="col-12 tect-center mt-5">
                <h1> Detalle de Producto</h1>
            </div>
            <div className="col-6 text-center mt-5">
                <img src={ products.img } alt={ products.name } className="img-fluid" />
                <h2> { products.name } </h2>
            </div>

            <div className="col-6 mt-5">
                <h4>Description: { products.description }</h4>
                <h4>Precio: { products.price }</h4>
                <h4>Stock: { products.stock }</h4>
                {
                    isCounter ?
                        <ItemCounter onAdd={ onAdd } initial={1} stock={10} />
                    :
                        <>
                            <Link className= "btn btn-outline-dark" to='/cart'> Terminar Compra</Link>
                            <Link className= "btn btn-outline-dark" to='/'> Seguir Comprando</Link>
                        </>

                }
            </div>
        </div>
    )
}

export default ItemDetail