import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail.jsx'
import { Loading } from '../Loading/Loading.jsx'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

export const ItemDetailContainer = () => {
    const[products, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { pid } = useParams()


    useEffect(() =>{
        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, 'products', pid)
        getDoc(queryDoc)
        .then(resultado => setProduct( { id: resultado.id, ...resultado.data() } ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])

    return (
        loading ?
            <Loading/>
        :
        <ItemDetail products={products} />
    )
}

export default ItemDetailContainer



