import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {mFetch} from "../../helpers/mFetch"
import ItemDetail from './ItemDetail/ItemDetail.jsx'
import ItemCounter from '../ItemCounter/ItemCounter.jsx'
import { Loading } from '../Loading/Loading.jsx'

export const ItemDetailContainer = () => {
    const[products, setproduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { pid } = useParams()


    useEffect(() =>{
        mFetch(pid)
            .then(res => setproduct(res))
            .catch(err => console.log('Error: ', err))
            .finally(() => setLoading(false))
    }, [pid])

    return (
        loading ?
            <Loading/>
        :
        <ItemDetail products={products} />
    )
}

export default ItemDetailContainer



