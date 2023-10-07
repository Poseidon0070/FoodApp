import style from "./Card.module.css"
let Card = (props) => {
    return (
        <div className={`container ${style['card']} rounded-4 mt-4 font-monospace pt-2 pb-3`}
        style={{width:"80%",marginLeft:"auto",marginRight:"auto",backgroundColor:"white"}}>
            {props.children}
        </div>
    )
}

export default Card;