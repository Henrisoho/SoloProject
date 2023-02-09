const correctReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_TRUE':
      return 1;
    case 'UNSET_FALSE':
      return 0;
    default:
      return null;
  }
}
export default correctReducer;