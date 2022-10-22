import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemListContainer = () => {
  const [data, setData] = useState ([])



    useEffect(() => {
      const db = getFirestore()
      const itemCollection = collection( db, 'items' )
        getDocs( itemCollection )
          .then(res => setData(res.docs.map(product => ({slug: product.slug, ...product.data()}))))
    },[])
  
  
    

  return (
    <div>
      <ItemList data ={data}/>
    </div>
  )
}

export default ItemListContainer