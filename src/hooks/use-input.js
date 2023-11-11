import { useState } from "react";


const useInput = (validateValue) => {
    let [enteredValue, setEnteredValue] = useState('')       // tracking value of input
    let [isTouched, setIsTouched] = useState(false)           // tracking touched state of input

    let valueIsValid = validateValue(enteredValue)             // checking value is valid
    let hasError = !valueIsValid && isTouched                   // checking if result has error
    
    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler = (event) => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value : enteredValue,
        isValid : valueIsValid,
        hasError,                                // error take into account touch to input aswell
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput;
