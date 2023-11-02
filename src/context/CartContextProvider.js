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
    else if(action.type === 'Remove'){
        let itemIndex = -1;
        console.log("here")
        for(let i in cartState.items){
            if(cartState.items[i].id === action.id){
                itemIndex = i;
            }
        }
        let targetItem = cartState.items[itemIndex]
        let newTotalAmount = cartState.totalAmount - targetItem .price; 
        let newItemList = [];
        if(targetItem.amount === 1){
            newItemList = cartState.items.filter((item) => item.id !== action.id)
        }else{
            let updatedItem = {...targetItem , amount:targetItem .amount-1}
            newItemList = [...cartState.items]
            newItemList[itemIndex] = updatedItem 
        }
        return {
            items : newItemList,
            totalAmount : newTotalAmount
        }
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
        console.log(id)
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