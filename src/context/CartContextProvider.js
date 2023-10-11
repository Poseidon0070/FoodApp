import React from "react"
import { useReducer} from "react"

let cartContext = React.createContext({
    items : [],
    totalAmount : 0,
    Add : (item) => {},
    Remove : (id) => {}
})

let cartReducer = (cartState,action) => {
    if(action.type === 'ADD'){
        console.log(action.item)
        let newItemList = cartState.items.concat(action.item.name)
        let newTotalAmount = cartState.totalAmount + action.item.price * action.item.amount
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