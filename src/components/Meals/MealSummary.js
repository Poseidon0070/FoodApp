import style from "./MealSummary.module.css"
let MealSummary = () => {
    return (
        <div style={{ width: "50%", color: "white", textAlign: "center", marginLeft: "auto", marginRight: "auto" }} className={`${style['summary']} py-4 rounded-4 font-monospace`}>
            <h1>Delicious Food, Delivered To You</h1>
            <div className="px-5 fs-5">
                <span>
                    Choose your favorite meal from our broad selection of available meals
                    and enjoy a delicious lunch or dinner at home.
                </span><br></br>
                <span>
                    All our meals are cooked with high-quality ingredients, just-in-time  and
                    of  course by experienced chefs!
                </span>
            </div>
        </div>
    )
}

export default MealSummary;