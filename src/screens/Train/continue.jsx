import { Button } from '@mui/material'
import React from 'react'

export default function Continue({isGlobalCorrect}) {
    
        const trueFalse = isGlobalCorrect


    console.log(trueFalse)


    if(isGlobalCorrect === 1){
return(
    <div>
    <Button>Continue</Button>
    </div>
)
    } else if(isGlobalCorrect === 0){
return(
    
    <h2>Try Again</h2>
)
    }else{
        return(
            <div></div>
        )
    }
}
