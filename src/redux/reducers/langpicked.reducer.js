const langPickedReducer = (state = [], action) => {
    console.log('langPickedreducer', action.payload)

  switch (action.type) {
    case 'SET_LANGUAGE_PICKED':
      return [...state, action.payload];
    default:
      return state;
  }
}
export default langPickedReducer;




// const cartAddRem = (state = [], action) => {
//     switch (action.type) {
//       case 'SET_CART':
//         return action.payload;
//      case 'REMOVE_PIZZA_FROM_ORDER':
//         return state.filter(pizza => pizza.id !== action.payload.id)
//     case 'ADD_PIZZA_TO_ORDER':
//         return [...state, action.payload]
//       default:
//         return state;
//     }
// }