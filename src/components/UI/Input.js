let Input = (props) => {
    return (
        <div>
            <label htmlFor={props.id} className="fw-bold fs-5 me-3">{props.label}</label>
            <input {...props.input} className="rounded-1"/>
        </div>
    )
}

export default Input;