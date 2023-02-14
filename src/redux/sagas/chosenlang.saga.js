import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* chosenLang(action) {
  const userId = action.payload.userId
  const langId = action.payload.id
  
    // console.log(userId, langId)
    if(userId, langId){
    try{
        const chosenLang = yield axios({
            method: 'POST',
            url: '/api/chosenlang',
            params: {
              userId: userId,
              langId: langId
            }
        })
    
        // console.log('chosenLang saga response:', chosenLang.data);
        yield put({ 
          type: 'SET_USER_LANGUAGES',
          payload: chosenLang.data
        });
    } catch {
      // console.log('chosenLang saga response:', chosenLang.data)
    }
    }
}

export default function* chosenLangSaga() {
  yield takeLatest('LANGUAGE_CHOSEN', chosenLang);
}