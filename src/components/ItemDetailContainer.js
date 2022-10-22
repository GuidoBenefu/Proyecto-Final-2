import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getFirestore, doc, getDoc, getDocs, where, query, collection } from "firebase/firestore"
import { useParams } from 'react-router-dom'
//import { data } from 'autoprefixer'

const ItemDetailContainer = () => {

    const [data, setData] = useState({})
    const { detalleID } = useParams()

    useEffect(() => {
      const db = getFirestore();
      const querydoc = doc(db, 'items', '4InkqxvPf6PhqrjeKLlV' )
      getDoc(querydoc)
        .then(res => setData({slug: res.slug, ...res.data()}))
    },[])

    return (
    <ItemDetail data ={data}/>
  )
}

export default ItemDetailContainer
/*
const db = getFirestore();
const querydoc = doc(db, 'items', )
getDoc(querydoc)
  .then(res => setData({slug: res.slug, ...res.data()}))
  */
  
/*
      const db = getFirestore();
      const itemsCollection = query(collection(db, "items"), where("id","==",parseInt(id)));
      getDocs(itemsCollection).then((snapshot)=>{
              setData(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data() })))
      })
*/