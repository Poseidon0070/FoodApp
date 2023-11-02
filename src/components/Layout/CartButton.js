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
    let totalItems = cartCtx.items.length;
    let hasItem = cartCtx.items.length > 0

    let addItemHandler = (item) => {
        cartCtx.Add(item)
    }

    let removeItemHandler = (id) => {
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
                        console.log(item)
                        return (
                            <CartItem item={item} addItem={addItemHandler.bind(null,item)} remove={removeItemHandler.bind(null,item.id)}></CartItem>
                        )
                    })}
                    <div className="d-flex justify-content-between mt-4">
                        <h2 className="fw-bold h3">Total Amount</h2>
                        <h2 className="fw-bold h4">{totalAmount}</h2>
                    </div>
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