const translateReducer = (state = {}, action) => {
  console.log(action.payload)
  switch (action.type) {
    case 'SET_TRANSLATE':
      return action.payload;
    case 'UNSET_TRANSLATE':
      return {};
    default:
      return state;
      
  }
};

export default translateReducer;