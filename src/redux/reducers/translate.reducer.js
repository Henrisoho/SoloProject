const translateReducer = (state = null, action) => {

  switch (action.type) {
    case 'SET_TRANSLATE':
      return action.payload;
    case 'UNSET_TRANSLATE':
      return [];
    default:
      return state;
      
  }
};

export default translateReducer;