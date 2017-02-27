import React from 'react';
import {Provider} from 'react-redux';
import store from './store/index.jsx'
import Counter from './counter';

console.log(store);


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <Provider className="App" store={store}> 
          <Counter/>
        </Provider>
      </div>
    )
  }
}
