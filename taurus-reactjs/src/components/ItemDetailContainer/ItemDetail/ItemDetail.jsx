import ItemCounter from "../../ItemCounter/ItemCounter"

export const ItemDetail = ({ img, name, description, price, stock } ) => {

    const onAdd = (cantidad) => {
        console.log(`La cantidad seleccionada es: ${cantidad}`)
    }

    return (
        <div className="row">
            <div className="col-12 tect-center mt-5">
                <h1> Detalle de Producto</h1>
            </div>
            <div className="col-6 text-center mt-5">
                <img src={ img } alt={ name } className="img-fluid" />
                <h2> { name } </h2>
            </div>

            <div className="col-6 mt-5">
                <h4>Description: { description }</h4>
                <h4>Precio: { price }</h4>
                <h4>Stock: { stock }</h4>
                <ItemCounter onAdd={ onAdd } initial={1} stock={10} />            
            </div>
        </div>
    )
}

export default ItemDetail