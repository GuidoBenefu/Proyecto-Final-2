import React, { createContext, useState } from 'react'

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([])

    const isInCart = (slug) => {
        const found = items.find(item => item.slug === slug);
        return found
    }

    const addItem = (item, counter) => {
        isInCart(item.slug)
        ?
        setItems(items.map((prod) => {
            if (prod.slug === item.slug) {
                prod.counter += counter
            }
            return prod
        }))
        :
        setItems([...items, {slug: item.slug, title: item.title, precio: item.precio, counter : counter}])
    }

    const removeItem = (slug) => {
        setItems(items.filter(item => item.slug !== slug))
    }

    const clear = () => {
        setItems([])
    }

    return (
        <CartContext.Provider value= {{ items, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}

