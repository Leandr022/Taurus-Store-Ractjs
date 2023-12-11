import {useCartContext} from "../../contexts/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import {useState} from "react"

export const CartContainer = () => {
    const[formData, setFormData]= useState({
        name:'',
        phone:'',
        email:'',

    })
    const {cartList, vaciarCarrito} = useCartContext()

    const handleOrder = async(evt) => {
        evt.preventDefault()
        const order ={}
        order.buyer = { name: 'leandro', phone: '112345678', email: 'lean@gmail.com'}
        order.items = cartList.map(({id, name, price}) => ({id, name,price}))
        order.total = totalPrice()

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
    }

    const handleOnChange= (evt) =>{
        setFormData({
            ...formData,
            [evt.target.name] : evt.target.value
        })
    }
    console.log(formData)
    return (
        <div>
            {cartList.map(products => <div key={products.id}>
                                        <img className="w25" src={products.img} />
                                        Cantidad: {products.cantidad} - Precio: {products.price}
                                        <button className="btn btn-danger"></button>
                                        </div>
            )}
            <button className="btn btn-danger" onClick={vaciarCarrito}> Vaciar Carrito</button>
            <form className="form-control p-5 mt-3" onSubmit={handleOrder}>
                <br/>
                <label>Ingresar Nombre</label>
                <br/>
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleOnChange}
                />
                <br/>
                <label>Ingresar Telefono</label>
                <br/>
                <input
                    className="form-control"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleOnChange}
                />
                <br/>
                <label>Ingresar Email</label>
                <br/>
                <input
                    className="form-control"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleOnChange}
                />
                <br/>
                <br/>
                <button className="btn btn-danger"> Terminar Compra</button>
            </form>
        </div>
    )
}

export default CartContainer