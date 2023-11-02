import {useState} from "react"
import CartIcon from "../Cart/CartIcon"
import style from "./CartButton.module.css"
import Modal from "../UI/Modal"
import { useContext } from "react"
import { cartContext } from "../../context/CartContextProvider"
import CartItem from "./CartItem"
let CartButton = () => {
    let [open,setModal] = useState(false)
    let cartCtx = useContext(cartContext)
    let totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    let totalItems = cartCtx.items.reduce((acc, item) => acc+item.amount, 0)
    let hasItem = cartCtx.items.length > 0

    let addItemHandler = (item) => {
        cartCtx.Add({...item, amount:1})
    }

    let removeItemHandler = (id) => {
        // console.log(id)
        cartCtx.Remove(id)
    }

    return (
        <>
            <button className={style['Cartbtn']} onClick={() => setModal(true)}>
                <span><CartIcon></CartIcon></span>
                <span className="fw-bold">&nbsp;Your Cart&nbsp;</span>
                <span className={style['count']}>{totalItems}</span>
            </button>
            <Modal open={open} onClose={() => setModal(false)}>
                <div className="mt-3">
                    {cartCtx.items.map((item) => {
                        return (
                            <CartItem 
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={item.price} 
                                amount={item.amount}
                                addItem={addItemHandler.bind(null,item)} 
                                remove={removeItemHandler.bind(null,item.id)}>
                            </CartItem>
                        )
                    })}
                    {
                        hasItem && 
                        <div className="d-flex justify-content-between mt-4">
                            <p className="fw-bold h3">Total Amount</p>
                            <p className="fw-bold h4">{totalAmount}</p>
                        </div>
                    }
                    {
                        !hasItem && 
                        <p className="fw-bold h3">Cart is Empty!</p>
                    }
                    <div className="d-flex flex-row-reverse">
                        <input type="button" className="btn btn-lg btn-outline-warning rounded-5 fw-semibold" value=" Close " onClick={() => setModal(false)}></input>
                        {hasItem && <input type="button" className="btn btn-lg btn-warning rounded-5 me-4 fw-semibold" value=" Order "></input>}
                    </div>
                </div>
            </Modal>
        </>
        
    )
}

export default CartButton;