import {useState} from "react"
import CartIcon from "../Cart/CartIcon"
import style from "./CartButton.module.css"
import Modal from "../UI/Modal"
let CartButton = () => {
    let [open,setModal] = useState(false)
    return (
        <>
            <button className={style['Cartbtn']} onClick={() => setModal(true)}>
                <span><CartIcon></CartIcon></span>
                <span className="fw-bold">&nbsp;&nbsp;Your Cart&nbsp;&nbsp;</span>
                <span className={style['count']}>3</span>
            </button>
            <Modal open={open} onClose={() => setModal(false)}>
                <div>
                    <h4>Sushi</h4>
                    <div className="d-flex justify-content-between">
                        <h2 className="fw-bold">Total Amount</h2>
                        <h2 className="fw-bold">35.00</h2>
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <input type="button" className="btn btn-lg btn-warning rounded-5" value=" Order "></input>
                        <input type="button" className="btn btn-lg btn-outline-warning rounded-5 me-4" value=" Close " onClick={() => setModal(false)}></input>
                    </div>
                </div>
            </Modal>
        </>
        
    )
}

export default CartButton;