import React from "react"
import { useReducer } from "react"

let cartContext = React.createContext({
    items : [],
    totalAmount : 0,
    Add : (item) => {},
    Remove : (id) => {}
})

let cartReducer = (cartState,action) => {
    if(action.type === 'ADD'){
        let newTotalAmount = cartState.totalAmount + action.item.price * action.item.amount
        let existingItemIndex = -1;
        let newItemList = []
        for(const i in cartState.items){
            if(cartState.items[i].id === action.item.id){
                console.log("here")
                existingItemIndex = i;
            }
        }
        if(existingItemIndex != -1){
            newItemList = [...cartState.items]
            let updatedItem = {
                ...cartState.items[existingItemIndex],
                amount : cartState.items[existingItemIndex].amount + action.item.amount
            }
            newItemList[existingItemIndex] = updatedItem
        }else{
            newItemList = cartState.items.concat(action.item)
        }
        return ({
            items: newItemList,
            totalAmount : newTotalAmount
        })
    }
    if(action.type === 'REMOVE'){
        return ({})
    }
}

let CartContextProvider = (props) => {
    let [cartState, dispatch] = useReducer(cartReducer,{
        items:[],
        totalAmount:0
    })
    let addItem = (item) => {
        dispatch({type:"ADD", item:item})
    }
    let removeItem = (id) => {
        dispatch({type:"Remove", id:id})
    }
    return (
        <cartContext.Provider value={{
            items:cartState.items,
            totalAmount:cartState.totalAmount,
            Add:addItem,
            Remove:removeItem
        }}>
            {props.children}
        </cartContext.Provider>
    )
}

export {CartContextProvider,cartContext};