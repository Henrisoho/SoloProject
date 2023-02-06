import { useDispatch, useSelector } from "react-redux"

export default  function WordGen({word}) {
const user = useSelector(store => store.user)
const dispatch = useDispatch()
    return(
        
         <div>
            <h1>{word.word}</h1>
        </div>
    )
}

