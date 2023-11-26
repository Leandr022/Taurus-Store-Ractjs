import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {mFetch} from "../../helpers/mFetch"
import ItemDetail from './ItemDetail/ItemDetail.jsx'

export const ItemDetailContainer = () => {
    const[products, setproduct] = useState({})
    const { pid } = useParams()

    

    useEffect(() =>{
        mFetch(pid)
            .then(res => setproduct(res))
            .catch(err => console.log('Error: ', err))
    }, [pid])

    return (
        <ItemDetail products={products} />
    )
}

export default ItemDetailContainer



