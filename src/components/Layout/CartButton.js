import CartIcon from "../Cart/CartIcon"
import style from "./CartButton.module.css"
let CartButton = () => {
    return (
        <button className={style['Cartbtn']}>
            <span><CartIcon></CartIcon></span>
            <span className="fw-bold">&nbsp;&nbsp;Your Cart&nbsp;&nbsp;</span>
            <span className={style['count']}>3</span>
        </button>
    )
}

export default CartButton;