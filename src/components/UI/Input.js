import React from "react";
let Input = React.forwardRef((props,ref) => {
    return (
        <div>
            <label htmlFor={props.id} className="fw-bold fs-5 me-3 text-danger">{props.label}</label>
            <input ref={ref} {...props.input} className="rounded-1"/>
        </div>
    )
})

export default Input;