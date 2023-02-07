import { useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';

const words = useSelector(store => store.wordsReducer)

const cardsReducer = () =>{
function rootAndSplice(arr1, arr2) {
  let newArr = [];
  let thirdArr = [];
  for (let i = 0; i < arr1.length; i++) {
    let word = arr1[i];
    newArr.push(word);
    for (let x = 0; x < 3; x++) {
      newArr.push(arr2[x]);
    }
    thirdArr.push(word);
    arr1.splice(arr1.indexOf(word), 1);
  }
  return [newArr, thirdArr];
}


function createCard(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const x = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[x]] = [arr[x], arr[i]];
  }
  return arr;
}


let wordToShuffleArray = rootAndSplice(words);
console.log(wordToShuffleArray)

const cardsReducer = (arr) => {
return cardWords = createCard(arr)
};
}
export default combineReducers({
  cardsReducer
});
