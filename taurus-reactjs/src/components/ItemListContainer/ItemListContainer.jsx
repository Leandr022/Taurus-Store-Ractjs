import { useEffect , useState} from "react"
import { mFetch } from "../../helpers/mFetch"
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList/ItemList"
import { Loading } from "../Loading/Loading"
import {doc, getFirestore, query,limit, collection, getDocs} from 'firebase/firestore'


export const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const {cid} = useParams()

    useEffect(() =>{
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'products')
        if (cid) {
            const queryFilter = query(
                queryCollection,
                where('category', '==', cid)
            )

            getDocs(queryFilter)
            .then(resp => setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() } ) )))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else {
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(productos =>({ id:productos.id, ...productos.data() } ) )))
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
