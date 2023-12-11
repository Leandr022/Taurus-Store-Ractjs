import { useEffect , useState} from "react"
import { mFetch } from "../../helpers/mFetch"
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList/ItemList"


const Loading = () => {
    return(
        <h2> Cargando...</h2>
    )
}

export const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {cid} = useParams()

    useEffect(() =>{
        if (cid) {
            mFetch()
            .then( result => setProductos(result.filter(products => products.category === cid)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else {
            mFetch()
            .then( result => setProductos(result))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }       
    }, [cid])


    return (
        <>
        <h2 className="text-center">{greeting}</h2>
        {
            loading ? 
                <Loading />
            :
            <ItemList productos={productos} />
        }
        </>
    )
}
