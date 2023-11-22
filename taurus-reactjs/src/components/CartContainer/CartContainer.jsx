import {useCartContext} from "../../contexts/CartContex"
export const CartContainer = () => {

    const {cartList, vaciarCarrito} = useCartContext()
    return (
        <div>
            {cartList.map(products => <div key={products.id}>
                                        <img className="w25" src={products.img} />
                                        Cantidad: {products.cantidad} - Precio: {products.price}
                                        <button className="btn btn-danger"></button>
                                        </div>
            )}
            <button className="btn btn-danger" onClick={vaciarCarrito}> Vaciar Carrito</button>
        </div>
    )
}

export default CartContainer