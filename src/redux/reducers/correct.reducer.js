const correctReducer = (state = [], action) => {
    switch (action.type) {
    case 'ADD_PIZZA_TO_ORDER':
        return [...state, action.payload]
      default:
        return state;
    }
}
export default correctReducer;