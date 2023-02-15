import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import translateSaga from './translate.saga';
import userSaga from './user.saga';
import wordsSaga from './words.saga';
import completeSaga from './complete.saga';
import shuffleDelegateSaga from './shuffledelegate.saga';
import correctIncorrectSaga from './correctIncorrect.saga';
import languagesSaga from './languages.saga';
import chosenLangSaga from './chosenlang.saga';
import userLanguagesSaga from './userlanguages.saga';
import practiceCompleteSaga from './practicecomplete.saga';
import testSaga from './test.saga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    wordsSaga(),
    translateSaga(),
    completeSaga(),
    shuffleDelegateSaga(),
    correctIncorrectSaga(),
    languagesSaga(),
    chosenLangSaga(),
    userLanguagesSaga(),
    practiceCompleteSaga(),
    testSaga()
  ]);
}
