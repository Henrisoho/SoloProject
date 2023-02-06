const wordsReducer = (state = [], action) => {

      function ten_random_words(arr){
  let tenWords = []
  for(let i = 0; i < 10; i++){
  tenWords.push(arr[Math.floor(Math.random()*arr.length)])
  }
  return tenWords
}

  switch (action.type) {
    case 'SET_WORDS':
      return ten_random_words(action.payload);
    case 'UNSET_WORDS':
      return [];
    default:
      return state;
      
  }
};

export default wordsReducer;