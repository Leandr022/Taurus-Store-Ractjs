import { useEffect , useState} from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList/ItemList"
import { Loading } from "../Loading/Loading"
import {getFirestore, query, collection, getDocs,where} from 'firebase/firestore'


export const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {cid} = useParams()

    useEffect(() =>{
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'products')
        const queryItems = cid ? query(queryCollection, where('category', '==', cid)) : queryCollection


            getDocs(queryItems)
            .then(resp => setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() } ) )))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
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
