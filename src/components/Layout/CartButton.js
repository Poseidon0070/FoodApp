import {useState} from "react"
import CartIcon from "../Cart/CartIcon"
import style from "./CartButton.module.css"
import Modal from "../UI/Modal"
import { useContext } from "react"
import { cartContext } from "../../context/CartContextProvider"
let CartButton = () => {
    let [open,setModal] = useState(false)
    let cartCtx = useContext(cartContext)
    let totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    let totalItems = cartCtx.items.length;
    let hasItem = cartCtx.items.length > 0
    return (
        <>
            <button className={style['Cartbtn']} onClick={() => setModal(true)}>
                <span><CartIcon></CartIcon></span>
                <span className="fw-bold">&nbsp;&nbsp;Your Cart&nbsp;&nbsp;</span>
                <span className={style['count']}>{totalItems}</span>
            </button>
            <Modal open={open} onClose={() => setModal(false)}>
                <div>
                    {cartCtx.items.map((item) => {
                        return <h4>{item}</h4>
                    })}
                    <div className="d-flex justify-content-between">
                        <h2 className="fw-bold">Total Amount</h2>
                        <h2 className="fw-bold">{totalAmount}</h2>
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <input type="button" className="btn btn-lg btn-outline-warning rounded-5" value=" Close " onClick={() => setModal(false)}></input>
                        {hasItem && <input type="button" className="btn btn-lg btn-warning rounded-5 me-4 " value=" Order "></input>}
                    </div>
                </div>
            </Modal>
        </>
        
    )
}

export default CartButton;