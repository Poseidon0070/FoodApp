import useInput from "../../hooks/use-input"

let CheckOut = (props) => {

    let {
        value : enteredName,
        isValid : enteredNameIsValid,
        hasError : enteredNameHasError,
        valueChangeHandler : nameChangeHandler,
        inputBlurHandler : nameInputBlurHandler,
        reset : resetNameInput
    } = useInput((value) => value.trim() != '')

    let {
        value : enteredStreet,
        isValid : enteredStreetIsValid,
        hasError : enteredStreetHasError,
        valueChangeHandler : streetChangeHandler,
        inputBlurHandler : streetInputBlurHandler,
        reset : resetStreetInput
    } = useInput((value) => value.trim() != '')

    let {
        value : enteredPostal,
        isValid : enteredPostalIsValid,
        hasError : enteredPostalHasError,
        valueChangeHandler : postalChangeHandler,
        inputBlurHandler : postalInputBlurHandler,
        reset : resetPostalInput
    } = useInput((value) => value.length === 6)

    let {
        value : enteredCity,
        isValid : enteredCityIsValid,
        hasError : enteredCityHasError,
        valueChangeHandler : cityChangeHandler,
        inputBlurHandler : cityInputBlurHandler,
        reset : resetCityInput
    } = useInput((value) => value.trim() != '')

    let invalid = {
        border: "1px solid #b40e0e",
        backgroundColor: "#fddddd",
        
    }

    let formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid;
    console.log(formIsValid)

    let formSubmitHandler = (event) => {
        event.preventDefault()
        if(!formIsValid) return ;
        props.onConfirm({
            name : enteredName,
            street : enteredStreet,
            postalCode : enteredPostal,
            city : enteredCity
        })
        resetNameInput()
        resetStreetInput()
        resetPostalInput()
        resetCityInput()
    }

    return (
        <div className="">
            <hr />
            <p className="text-center fs-3 text-decoration-underline">Enter delivery details</p>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor="name" className="form-label mt-2">Name</label>
                <input type="text" id="name" className="form-control w-75" style={enteredNameHasError ? {...invalid} : {}} onChange={nameChangeHandler} onBlur={nameInputBlurHandler} value={enteredName}></input>
                {enteredNameHasError && <p style={{color: "#b40e0e"}}>Please enter a valid name!</p>}
                <label htmlFor="street" className="form-label mt-2">Street</label>
                <input type="text" id="street" className="form-control w-75" style={enteredStreetHasError ? {...invalid} : {}} onChange={streetChangeHandler} onBlur={streetInputBlurHandler} value={enteredStreet}></input>
                {enteredStreetHasError && <p style={{color: "#b40e0e"}}>Please enter a valid street!</p>}
                <label htmlFor="postal" className="form-label mt-2">Postal Code</label>
                <input type="text" id="postal" className="form-control w-75" style={enteredPostalHasError ? {...invalid} : {}} onChange={postalChangeHandler} onBlur={postalInputBlurHandler} value={enteredPostal}></input>
                {enteredPostalHasError && <p style={{color: "#b40e0e"}}>Please enter a valid (6-digit) postal code !</p>}
                <label htmlFor="city" className="form-label mt-2">City</label>
                <input type="text" id="city" className="form-control w-75" style={enteredCityHasError ? {...invalid} : {}} onChange={cityChangeHandler} onBlur={cityInputBlurHandler} value={enteredCity}></input>
                {enteredCityHasError && <p style={{color: "#b40e0e"}}>Please enter a valid city!</p>}
                <div className="mt-3 d-flex justify-content-end">
                    <input type="submit" className="btn btn-lg btn-outline-success rounded-3 me-3 fw-semibold" disabled={!formIsValid} value="Confirm"></input>
                    <input type="button" className="btn btn-lg btn-success rounded-3 fw-semibold" value="Cancel" onClick={props.onClose}></input>
                </div>
            </form>
        </div>
    )
}

export default CheckOut;