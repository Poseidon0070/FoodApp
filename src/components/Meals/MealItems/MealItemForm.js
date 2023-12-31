import Input from "../../UI/Input"
import { useRef } from "react"


let MealItemForm = (props) => {
    let amountRef = useRef(null)
    let submitHandler = (event) => {
        event.preventDefault()
        let amount = amountRef.current.value
        let amountNumber = +(amount)
        if(amountNumber === 0 || amount.trim.length === '' || amountNumber > 5) return ;
        console.log(amount)
        props.AddToCart(amountNumber)
    }
    return (
        <form onSubmit={submitHandler}>
            <Input
                ref={amountRef} 
                label='Amount' 
                input={{
                    id:'amount_' + props.id,
                    type:"number",
                    min:"1",
                    max:"10",
                    step:"1",
                    defaultValue:"1"
                }}>
            </Input>
            <input type="submit" value="  +Add  " className="btn btn-lg btn-warning rounded-5 mt-3 ms-2"></input>
        </form>
    )
}

export default MealItemForm