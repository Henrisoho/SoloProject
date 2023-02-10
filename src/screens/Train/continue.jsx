import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Continue({id, answer}) {


console.log('id:', id);
console.log('datatype of id:', typeof id);
console.log('answer:', answer);
console.log('datatype of answer:', typeof answer);


if(id === answer && id != undefined){
    return(
        <button>Next</button>
    )
}else if(id != answer){
    return(
        <h1>try again</h1>
    )
}else if( id  === undefined){
    return(
        <div></div>
    )
}

}
