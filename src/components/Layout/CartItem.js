import { useContext } from "react";

let CartItem = (props) => {

    return (
        <div>
            <div className="d-flex">
                <div>
                    <p className="h3 fw-bolder">{props.name}</p>
                    <div className="d-flex align-items-center">
                        <span className="fw-bolder mt-2 fs-5" style={{color:"orange"}}>{`$${props.price.toFixed(2)}`}</span>
                        <span className="fw-bolder ms-5 btn btn-sm btn-danger">&#215;{`${props.amount}`}</span>
                    </div>
                </div>
                <div className="ms-auto mt-3">
                    <button className="fw-bolder btn btn-danger" style={{width:"50px"}} onClick={props.remove}>-</button>
                    <button className="fw-bolder ms-4 btn btn-danger" style={{width:"50px"}} onClick={props.addItem}>+</button>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CartItem;