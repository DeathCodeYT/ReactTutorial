import {useState} from 'react'
export function useTheme(){
    const [theme,setTheme] = useState("light")
    function toogleTheme(){
        setTheme((prev)=>prev=="light"?"dark":"light")
    }
    return [theme,toogleTheme]
}