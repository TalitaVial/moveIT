import { useState } from "react"

interface ButtonProps{
    color: string
    label: string
}

export function Button({label, color}: ButtonProps){
    const [counter, setCounter] = useState(0)

    const handleIncrementClick = () =>{
        const add = counter + 1
        setCounter(add)
    }
    return(
        <button type="button" style={{background: color, color: 'white'}} onClick={handleIncrementClick}>
            {label} <span>{counter}</span>
        </button>
    )
}

export default Button