import { Button } from "react-bootstrap"
import { useState, useEffect } from "react"
import { gFetch } from "./Items"



const ItemListContainer = () => {
  const [ items, setItems ] = useState([])
  const [loading, setLoading] = useState(true)

    useEffect( () => {
      gFetch
      .then(res => setItems(res))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))      
    }, [])

    const handleBool = () => {
      setLoading(!loading)
    }

    console.log(items)

    return (
            <div>
                { loading ?
                    <h2>Cargando...</h2>
                :
                  items.map(prod => <div key="prod.id" className="col-md-4 p-1">
                  <div className="card w-100 mt-5"/>
                      <div className="card-header">
                        {prod.title}
                      </div>  
                      <div className="card-body">
                        <img src={prod.img} alt="" className="w-50" />
                        {prod.price}
                      </div>
                      <div className="card-footer">
                          <button className="btn btn-outline-primary btn-block">
                          Detalle del Producto
                          </button>
                      </div>
                  </div>
                  ) }
            </div>
    )
}

export default ItemListContainer