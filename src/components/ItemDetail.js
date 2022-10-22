import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/useContext'
import ItemCount from './ItemCount'

const ItemDetail = ({data}) => {
  const [add, setAdd] = useState(false)
  
  const {addItem} = useContext(CartContext)

  return (
    <article className='inline-block text-center text-xl'>
        <h3>{data.title}</h3>
        <img src={data.img} alt="" className='w-100 h-100'/>
        <h4 className='underline'>${data.precio}</h4>
          <div>
            <br></br>
            {
              add ? 
              <div>Añadido</div>
              :
              <ItemCount data={data} Stock="5" Initial="1" addItem={addItem}/>
            }
          </div>
          <div>
            <br></br>
            <Link to = "/cart">
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded' >Finalizar Compra</button>
            </Link>
        </div>
    </article>
  )
}

export default ItemDetail