import Input from "../../UI/Input";
let MealItem = (props) => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <li style={{listStyle:"none"}} className="mt-4">
                        <h2>{props.name}</h2>
                        <span className="fst-italic d-block fw-bold">{props.description}</span>
                        <h5 className="pt-3 fw-bolder" style={{color:"orange"}}>{`$${props.price.toFixed(2)}`}</h5>
                    </li>
                </div>
                <div className="">
                    <Input
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
                    <input type="button" value="  + Add  " className="btn btn-warning rounded-5 mt-2 ms-2"></input>
                </div>
            </div>
        <hr></hr>
        </>
    )
}

export default MealItem;