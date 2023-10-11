import React from "react";
let Input = (props,ref) => {
    return (
        <div>
            <label htmlFor={props.id} className="fw-bold fs-5 me-3">{props.label}</label>
            <input ref={ref} {...props.input} className="rounded-1"/>
        </div>
    )
}

export default React.forwardRef(Input);