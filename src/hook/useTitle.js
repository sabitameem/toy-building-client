import { useEffect } from "react"

const useTitle= title=>{
    useEffect(()=>{
        document.title =`${title} - Toy-Building`
    },[title])
}

export default useTitle;