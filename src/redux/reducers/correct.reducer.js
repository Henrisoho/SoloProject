const correctIncorrectReducer = (state = 0, action) => {
    // console.log('correctIncorrectreducer', action.payload)
  switch (action.type) {
    case 'SET_CORRECT_INCORRECT':
      return action.payload;
    default:
      return null;
  }
}
export default correctIncorrectReducer;