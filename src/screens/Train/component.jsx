import { useDispatch, useSelector } from "react-redux"

export default  function RandomThree({word}) {
const user = useSelector(store => store.user)
const dispatch = useDispatch()

    return(
        
        <li>
         <div key={word.id}>
         <h1>{word.word} </h1>
          </div>
        </li>
    )
}

