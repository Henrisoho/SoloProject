const correctIncorrectReducer = (state = 0, action) => {
  switch (action.type) {
    case 'SET_CORRECT_INCORRECT':
      return action.payload;
    default:
      return null;
  }
}
export default correctIncorrectReducer;