import { useEffect , useState} from "react"
import { mFetch } from "../../helpers/mFetch"
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList/ItemList"

export const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const {cid} = useParams()

    useEffect(() =>{
        if (cid) {
            mFetch()
            .then( result => setProductos(result.filter(products => products.category === cid)))
            .catch(err => console.log(err))
        } else {
            mFetch()
            .then( result => setProductos(result))
            .catch(err => console.log(err))
            
        }       
    }, [cid])

    return (
        <ItemList productos={productos} />
    )
}
