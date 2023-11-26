import {Filter} from "./FIlter"
import {Item} from "../Item/Item"

const productsFilter = (productos, filterState, handleFilterChange) => {
    <>
        <div>
            <label> Buscar </label>
            <input 
                className="form-control"
                type="text"
                value={filterState}
                onChange={handleFilterChange }
            />
        </div>
        <br />

        <div style={{
            display: 'flex',
            flexDirection: 'row' ,
            flexWrap: 'wrap' ,
            gap: '10px',
            justifyContent: 'center'
    }}>

    {   filterState === ''
            ?
            productos.map(products => <div key={products.id} className='card w-25'>
                <div className= 'card-body p-0 text center'> 
                <img src={products.img} className='w-100' alt='imagen' />
                <h6>{products.name}</h6>
                <p>Precio: {products.price} </p>
                <p>Stock: {products.stock}</p>
                <p>Descripción: {products.description}</p>
                </div>
                    <div className='card/footer'>
                        <button className='btn-outline-dark w-100'>Detalle</button>
                    </div>
                </div>
        )
        :  
        productos
        .filter(prod => prod.name.toLoweCase().include(filterState))
        .map(products => <div key={products.id} className='card w-25'>
                <div className= 'card-body p-0 text center'> 
                <img src={products.img} className='w-100' alt='imagen' />
                <h6>{products.name}</h6>
                <p>Precio: {products.price} </p>
                <p>Stock: {products.stock}</p>
                <p>Descripción: {products.description}</p>
                </div>
                    <div className='card/footer'>
                        <button className='btn-outline-dark w-100'>Detalle</button>
                    </div>
                </div>
        )
    }
        </div>
    </>
}

export const ItemList = ({ productos }) => {
    return (

        <div style={{
            display: 'flex',
            flexDirection: 'row' ,
            flexWrap: 'wrap' ,
            gap: '10px',
            justifyContent: 'center'
    }}>

            { productos.map(products => <Item key={products.id} products={products} /> )}
        </div>
    )
}

export default ItemList