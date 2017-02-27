import React from 'React'; 
import {connect} from 'react-redux';
import {decrement} from './actions/decrement';
import {increment} from './actions/increment';
// console.log({increment, decrement});
console.log(decrement);

const Counter = ({ counter, onIncrement, onDerement }) => (
  <div>
    {()=>console.log('counter', counter)}
    <h1> {counter} </h1> 
    <button onClick={()=>onIncrement(1)}>Add number</button>
    <button onClick={()=>onDerement(1)}>Remove number</button>
  </div>
  );


const mapStateToProp = ({counter}) => ({counter});
const mapDispatchToProp = (dispatch) => ({
  onIncrement: (number) =>dispatch(increment(number)),
  onDerement: (number) =>dispatch(decrement(number))
});

export default connect(mapStateToProp, mapDispatchToProp)(Counter);
