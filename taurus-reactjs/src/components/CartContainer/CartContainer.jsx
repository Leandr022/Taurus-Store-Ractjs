import {useCartContext} from "../../contexts/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import {useState} from "react"
import { Link } from "react-router-dom"

export const CartContainer = () => {
    const[formData, setFormData]= useState({
        name:'',
        phone:'',
        email:'',
        repetirEmail:''

    })
    const [isId, setIsId] = useState('')
    const {cartList, vaciarCarrito, totalPrice, removeProduct} = useCartContext()

    const handleOrder = async(evt) => {
        evt.preventDefault()
        const order ={}
        order.buyer = { name: 'leandro', phone: '112345678', email: 'lean@gmail.com'}
        order.items = cartList.map(({id, name, price}) => ({id, name,price}))
        order.total = totalPrice()

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
        .then(resp => setIsId(resp.id))
        .catch(err => console.log(err))
        .finally( ()=>{
            setFormData({
                name:'',
                phone:'',
                email:'',
                repetirEmail:''
            })
            vaciarCarrito()
        })
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
            {isId !== '' && <label>La orden de compra es: {isId}</label>}
            {cartList.map(products => <div key={products.id}>
                                        <img className="w25" src={products.img} />
                                        Cantidad: {products.cantidad} - Precio: {products.price}
                                        <button className="btn btn-danger" onClick={() =>removeProduct(products.id)}> X </button>
                                        </div>
            )}
            
                {
                    totalPrice() !== 0 ?
                        <div>
                            No hay producto
                            <br/>
                            <Link to={'/'}> Ir a elegir productos</Link> 
                        </div>
                    :
                        <>
                            <br/>
                            <label>Precio total: {totalPrice()} </label>
                            <br/>
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
                                <label>Repetir Email</label>
                                <br/>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="repetirEmail"
                                    value={formData.repetirEmail}
                                    onChange={handleOnChange}
                                />
                                <br/>
                                <br/>
                                <button className="btn btn-danger"> Terminar Compra</button>
                            </form>
                        </>
                }
        </div>
    )
}

export default CartContainer