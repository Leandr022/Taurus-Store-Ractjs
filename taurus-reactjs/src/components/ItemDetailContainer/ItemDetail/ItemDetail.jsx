import {ItemCounter} from "../../ItemCounter/ItemCounter"
import {useContext} from "react"
import { CartContext } from "../../../contexts/CartContex"

export const ItemDetail = ({ products } ) => {

    const {addProduct} = useContext(CartContext)

    const onAdd = (cantidad) => {
        console.log(`La cantidad seleccionada es: ${cantidad}`)
        addProduct( {...products, cantidad } )
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
                <ItemCounter onAdd={ onAdd } initial={1} stock={10} />            
            </div>
        </div>
    )
}

export default ItemDetail