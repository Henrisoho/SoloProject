import React, { useEffect } from 'react'
import axios from 'axios';
import LangPicker from './components';
import { useDispatch, useSelector } from 'react-redux';

export default function Settings() {
  const languages = useSelector(store => store.languagesReducer)
  const dispatch = useDispatch()

     useEffect(() => {
    dispatch({ type: 'FETCH_LANGUAGES' });  
  }, []);

  if(languages){
console.log(languages)
  return (
    <>
      <div>
       <h1> Pick a langauge </h1>
        </div>

      <div>
        {languages?.map((language) => {
          return (
            <LangPicker
            key={language.id}
            languages={language.name}
            languageId={language.id}
            languageDesig={language.desig}
            />
          )
        })}
      </div>
    </>
  )
  }else{
    return(
      <h1>Loading</h1>
    )
  }
}