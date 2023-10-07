import React from "react"
import img from "../../assets/meals.jpg"
import CartButton from "./CartButton";
import style from "./CartButton.module.css"

let Header = () => {
    return (
        <>
            <div style={{ backgroundColor: "brown", position:"relative", zIndex:"2"}}>
                <div className="container d-flex align-items-center font-monospace py-3">
                    <h1 className="ms-5 fw-bold" style={{color:"white"}}>ReactMeals</h1>
                    <span className="ms-auto"><CartButton /></span>
                </div>
            </div>
            <div>
                <img src={img}
                    style={{
                        width: "110%",
                        height: "45vh",
                        objectFit: 'cover',
                        zIndex:"1"
                    }}
                    className={style['rotated-image']}
                    alt="Meals">
                </img>
            </div>
        </>
    )
}

export default Header;