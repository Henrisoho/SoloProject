import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function LangPicker({languages,languageId,languageDesig}) {
    const user= useSelector ((store)=> store.user)
    const dispatch = useDispatch()
    const onClick = (event) =>{
        event.preventDefault();
        dispatch({
            type: 'LANGUAGE_CHOSEN',
            payload: {
                name: languages,
                desig: languageDesig,
                id: languageId,
                userId: user.id
            }
        })
    }



  return (
    <Button 
    variant="contained" 
    style={{margin: 5}}
    key={languageId}
    onClick ={ onClick}
    >
        {languages}
    </Button>

  )
}
