const userLanguagesReducer = (state = [], action) => {
    // console.log(`userLanguages payload ${action.paylaod}`)
  switch (action.type) {
    case 'SET_USER_LANGUAGES':
      return action.payload;
    case 'UNSET_USER':
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default userLanguagesReducer;
