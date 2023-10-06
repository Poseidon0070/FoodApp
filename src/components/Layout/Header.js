import React from "react"
import img from "../../assets/meals.jpg"
let Header = () => {
    return (
        <>
            <div style={{backgroundColor:"brown"}}>
                <div className="container d-flex align-items-center font-monospace py-3">
                    <h1 className="ms-5 fw-bold">ReactMeals</h1>
                    <input type="button" className="ms-auto btn btn-primary" value="  Cart  " />
                </div>
            </div>
            <div>
                <img src={img} style={{width:"100vw",height:"45vh"}}></img>
            </div>
        </>
    )
}

export default Header;