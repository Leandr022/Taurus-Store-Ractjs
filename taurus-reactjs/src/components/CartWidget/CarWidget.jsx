import { useCartContext } from "../../contexts/CartContext"
import { AiOutlineShoppingCart } from "react-icons/ai";

export const CarWidget = () => {
    const {totalCantidad} = useCartContext()
    return (
        <div>
            {totalCantidad() !== 0 && totalCantidad()}
            <AiOutlineShoppingCart />
        </div>
    )
}
