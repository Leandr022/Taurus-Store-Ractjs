import { memo } from "react"
import { Link } from "react-router-dom"

export const Item = memo(({ products }) => {
    return (
        <div className='card w-25'>
            <div className= 'card-body p-0 text center'> 
                <img src={products.img} className=' card-img-top w-100' alt='imagen' />
                <h6>{products.name}</h6>
                <p>Precio: {products.price} </p>
                <p>Stock: {products.stock}</p>
                {/*<p>Descripción: {products.description}</p> */}
            </div>
            <div className='card/footer'>
            <Link to={`/detail/${products.id}`} className='btn btn-outline-dark w-100'> Detalle </Link>
            </div>
        
        </div>
    )
}
)
export default Item