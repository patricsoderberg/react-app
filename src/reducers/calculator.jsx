// export default (state = [], action) => {
//   switch(action.type) {
//     case 'ADD_TODO': return [...state, {text: action.text}];
//     default: return state;
//   }
// }

export default (state = 0, action) => {
  console.log('state', state);
  console.log('action', action);
  
  switch (action.type) {
      case 'INCREMENT' :
        let newNumber =  state + action.number;
       return newNumber ;
      case 'DECREMENT' : return state;
      default: return state;
  }
}
