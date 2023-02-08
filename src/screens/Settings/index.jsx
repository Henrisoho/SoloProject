import React, { useEffect } from 'react'
import axios from 'axios';

export default function Settings() {
  
    useEffect(() => {
      
  }, []);
  
  


  
  
  
  
  return (
    <div>Settings</div>
  )
}



  
const options = {
  method: 'GET',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
  params: {target: 'en'},
  headers: {
    'X-RapidAPI-Key': '4908717772msh571e50099e595b7p18545fjsn0641b559ef67',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  