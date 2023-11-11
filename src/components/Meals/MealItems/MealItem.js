import MealItemForm from "./MealItemForm"
import { useContext } from "react"
import { cartContext } from "../../../context/CartContextProvider"

let MealItem = (props) => {
    let cartCtx = useContext(cartContext)
    let AddToCartHandler = (amount) => {
        cartCtx.Add({
            name:props.name,
            id:props.id,
            amount:amount,
            price:props.price
        })
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <li style={{listStyle:"none"}} className="mt-4">
                        <p className="h1 fw-medium--dark">{props.name}</p>
                        <span className="fst-italic d-block fw-bold fs-5">{props.description}</span>
                        <h5 className="pt-3 fw-bolder fs-4" style={{color:"orange"}}>{`$${props.price.toFixed(2)}`}</h5>
                    </li>
                </div>
                <MealItemForm AddToCart={AddToCartHandler}></MealItemForm>
            </div>
            <hr />
        </>
    )
}

export default MealItem;