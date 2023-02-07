const wordsReducer = (state = [], action) => {


  function wordsScramble(arr){
  let tenWords = []
   if (arr != undefined){
  for(let i = 0; i < 4; i++){
  tenWords.push(arr[Math.floor(Math.random()*arr.length)])
  }
   }

  return tenWords
}

let newArr = wordsScramble(action.payload)
console.log(newArr)

const testArray = [...newArr]
console.log(testArray)
const correctWord = testArray[0]
console.log(correctWord)


  switch (action.type) {
    case 'SET_WORDS':
      return {testArray, correctWord};
    case 'UNSET_WORDS':
      return [];
    default:
      return state;
      
  }
};

export default wordsReducer;


//takes in an array of 4 words designates ands captures the id of word 0 then shuffles the array to be displayed on the dom


// const originalArray = [{id: 1, name: "Object 1"},
//                        {id: 2, name: "Object 2"},
//                        {id: 3, name: "Object 3"},
//                        {id: 4, name: "Object 4"}];

// const newArray = [...originalArray];
// const firstObjectId = newArray[0].id;

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// const shuffledArray = shuffleArray(newArray);