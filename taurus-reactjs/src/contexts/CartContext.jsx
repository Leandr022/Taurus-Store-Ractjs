import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList , setCartList] = useState([])

    const isCart = (pid) => cartList.findIndex(products => products.id=== pid)

    const addProduct = (products) => {
        const indexProduct = isCart(products.id)
        if (indexProduct !== -1){
            cartList[indexProduct].cantidad += products.cantidad
            return setCartList([...cartList])
        } 
        setCartList([
            ...cartList,
            products
        ])
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    const totalPrice = () => cartList.reduce((totalPrecio,products) => totalPrecio += (products.price * products.cantidad) ,0)

    const totalCantidad = () => cartList.reduce((totalProduct,products) => totalProduct += products.cantidad ,0)

    const removeProduct = (pid) => {
        setCartList(cartList.filter(products => products.id !== pid))
    }
    return(
        <CartContext.Provider value= {{
            cartList,
            addProduct,
            vaciarCarrito,
            totalPrice,
            totalCantidad,
            removeProduct
        }}>
        {children}
        </CartContext.Provider>
    )
}