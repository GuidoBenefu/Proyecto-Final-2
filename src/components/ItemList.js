import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
  return (
    <div>
        {data.length ? (
            data.map((product) => <Item key={product.slug} {...product}/>)
        ) : (
            <h3 className='underline'>Loading...</h3>
        )}
    </div>
  )
}

export default ItemList