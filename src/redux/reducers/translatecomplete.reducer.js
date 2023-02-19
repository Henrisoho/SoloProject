const translateCompleteReducer = (state = [], action) => {
     console.log('test reducer', action.payload)
    switch (action.type) {
        case 'TRANSLATED_COMPLETE_WORD':
            return action.payload;
        case 'UN_SET_TRANSLATED_COMPLETE_WORD':
            return [];
        default:
            return state;

    }
};

export default translateCompleteReducer;