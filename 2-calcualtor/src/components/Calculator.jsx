import React, { useState } from 'react'
import Button from './Button'

function Calculator() {
    const buttons = [
        "+",
        "-",
        "/",
        "*",
        "7",
        "8",
        "9",
        "<-",
        "4",
        "5",
        "6",
        "C",
        "1",
        "2",
        "3",
        "00",
        ".",
        "0",
        "=",

    ]
    const [inpVal, setInpVal] = useState("0")
    const handleClickButton = (value) => {
        if (value === "C") {
            setInpVal("0")
        } else if (value === "<-") {
            if (inpVal.length <= 1) {
                setInpVal("0")
            }
            else {
                setInpVal(inpVal.substring(0, inpVal.length - 1))
            }
        } else if (value === "=") {
            let x = eval(inpVal)
            setInpVal(x.toString())
        } else {
            if (inpVal === 0) {
                setInpVal(value)
            } else
                setInpVal(inpVal + value)
        }
    }
    return (
        <div className='border rounded-lg w-[25rem] bg-gray-100 p-1 mx-auto my-8'>
            <input type="text" className='w-full rounded-lg focus:outline-none h-10 mb-4 p-2 text-xl' value={inpVal} readOnly />
            <div className='w-full p-0.5 flex flex-wrap items-center gap-2 justify-evenly'>
                {
                    buttons.map(text => {
                        
                        return <Button key={text} handleClickButton={() => handleClickButton(text)}>{text}</Button>
                    })
                }
            </div>
        </div>
    )
}

export default Calculator