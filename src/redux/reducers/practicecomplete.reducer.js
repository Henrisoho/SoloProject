const practiceCompleteReducer = (state = [], action) => {
    console.log('practiceCompleteReducer', action.payload)
  switch (action.type) {
    case 'SET_PRACTICE_COMPLETE':
      return [...state, action.payload];
    default:
      return state;
  }
}
export default practiceCompleteReducer;