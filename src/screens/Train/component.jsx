import { useDispatch, useSelector } from "react-redux"

export default  function WordGen({word}) {
const user = useSelector(store => store.user)
const dispatch = useDispatch()
 let words = word.word
if (words != null){
    return(
        
         <div>
            <h1>{words}</h1>
        </div>
    )
}
}

