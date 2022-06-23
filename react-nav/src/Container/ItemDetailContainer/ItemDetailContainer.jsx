import { useEffect, useState } from "react"
import { getFetch } from '../../Helpers/getFetch'
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Intercambiabilidad from '../../components/Intercambiabilidad/Intercambiabilidad'




const ItemDetailConatainer = () => {
    const [producto, setProducto] = useState({})

    const { id } = useParams()

    console.log(id)

    useEffect(() => {
        getFetch(id)
            .then((resp) => setProducto(resp))
            .catch(err => console.log(err))            
    }, [])

    
    
    return (
        <div className="border border-1 border-danger">
            <ItemDetail producto={producto} />
            <Intercambiabilidad />
            {/* <Caso1 /> */}
            {/* <Caso2 /> */}
        </div>
    )
}
export default ItemDetailConatainer