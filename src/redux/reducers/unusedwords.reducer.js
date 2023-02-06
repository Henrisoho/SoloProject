const unusedwordsReducer = (state = [], action) => {

      function three_random_words(arr){
  let threeWords = []
  for(let i = 0; i < 3; i++){
  threeWords.push(arr[Math.floor(Math.random()*arr.length)])
  }
  return threeWords
}

  switch (action.type) {
    case 'SET_UNUSEDWORDS':
      return three_random_words(action.payload);
    case 'UNSET_UNUSEDWORDS':
      return [];
    default:
      return state;
      
  }
};

export default unusedwordsReducer;