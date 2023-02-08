const completeReducer = (state = null, action) => {
  console.log(action.payload)
  switch (action.type) {
    case 'SET_COMPLETE':
      return action.payload;
    case 'UNSET_COMPLETE':
      return [];
    default:
      return state;
      
  }
};

export default completeReducer;