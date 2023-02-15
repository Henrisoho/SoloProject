const testReducer = (state = false, action) => {
    //  console.log('test reducer', action.payload)
    switch (action.type) {
        case 'SET_TEST_RESULT':
            return action.payload;
        case 'UN_SET_TEST_RESULT':
            return false;
        default:
            return state;

    }
};

export default testReducer;