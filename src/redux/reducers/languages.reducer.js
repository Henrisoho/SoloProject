const languagesReducer = (state = [], action) => {
    //
//   console.log(action.payload)
  switch (action.type) {
    case 'SET_LANGUAGES':
      return action.payload;
    case 'UNSET_LANGUAGES':
      return [];
    default:
      return state;
  }
};

export default languagesReducer;