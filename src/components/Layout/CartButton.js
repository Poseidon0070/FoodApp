import {useEffect, useState} from "react"
import CartIcon from "../Cart/CartIcon"
import style from "./CartButton.module.css"
import Modal from "../UI/Modal"
import { useContext } from "react"
import { cartContext } from "../../context/CartContextProvider"
import CartItem from "./CartItem"
import Checkout from "./CheckOut"
import loadingImg from "../../images/loading.gif"
import successImg from "../../images/success.webp"

let CartButton = () => {
    let [open,setModal] = useState(false)
    let [buttonBump, setButtonBump] = useState(false)
    let [checkOut, setCheckOut] = useState(false)
    let [isSubmitting, setIsSubmitting] = useState(false)
    let [submitted, setSubmitted] = useState(false)
    let cartCtx = useContext(cartContext)
    let totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    let totalItems = cartCtx.items.reduce((acc, item) => acc+item.amount, 0)
    let hasItem = cartCtx.items.length > 0
    let {items} = cartCtx

    let addItemHandler = (item) => {
        cartCtx.Add({...item, amount:1})
    }

    let removeItemHandler = (id) => {
        cartCtx.Remove(id)
    }

    let checkOutHandler = () => {
        setCheckOut(true)
    }

    let checkOutCloseHandler = () => {
        setCheckOut(false)
        setModal(false)
    }

    useEffect(() => {
        if(items.length === 0) return ;
        setButtonBump(true)

        let timer = setTimeout(() => {
            setButtonBump(false)
        },200)

        return () => clearTimeout(timer)
    }, [items])

    let orderHandler = async (userData) => {
        setIsSubmitting(true)
        
        await fetch("https://react-http-fad6d-default-rtdb.firebaseio.com/orders.json",{
            method : "POST",
            body : JSON.stringify({
                user : userData,
                orderedItems : cartCtx.items
            })
        })

        setIsSubmitting(false)
        setSubmitted(true)
        cartCtx.Clear()
    }

    let cartContent = (
        <div className="mt-3">
        <div>
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
            </div>
            {
                checkOut && 
                <Checkout onClose={checkOutCloseHandler} onConfirm={orderHandler}/>
            }
            {
                !checkOut && 
                <div className="d-flex flex-row-reverse">
                    <input type="button" className="btn btn-lg btn-outline-warning rounded-3 fw-semibold" value=" Close " onClick={() => setModal(false)}></input>
                    {hasItem && <input type="button" className="btn btn-lg btn-warning rounded-3 me-4 fw-semibold" value=" Order " onClick={checkOutHandler}></input>}
                </div>
            }
        </div>
    )

    let loadingContent = (
        <div className="text-center">
            <img src={loadingImg}></img>
        </div>
    )

    let submittedSuccessMessage = (
        <>
            <span className="fs-4 text-success pt-1 mt-1">Order Successfull!</span>
            <img src={successImg} style={{height:"75px", width:"75px"} } className="pb-1"></img>
            <div className="d-flex flex-row-reverse">
                <input type="button" className="btn btn-lg btn-outline-warning rounded-3 fw-semibold" value=" Close " onClick={() => setModal(false)}></input>
            </div>
        </>
    )

    return (
        <>
            <button className={`${style['Cartbtn']} ${buttonBump ? style['Cartbump'] : ''}`} onClick={() => setModal(true)}>
                <span><CartIcon></CartIcon></span>
                <span className="fw-bold fs-5">&nbsp;My Cart&nbsp;</span>
                <span className={style['count']}>{totalItems}</span>
            </button>
            <Modal open={open} onClose={() => setModal(false)}>
                {!isSubmitting && !submitted && cartContent}
                {isSubmitting && loadingContent}
                {submitted && submittedSuccessMessage}
            </Modal>
        </>
        
    )
}

export default CartButton;