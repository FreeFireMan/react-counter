import React, {Component} from 'react';
import Counter from "./components/Counter";
import './App.css';

class App extends Component {
  render() {
    return (
        <div className={'wrapper'}>
            <Counter/>
        </div>
    );
  }
}

export default App;


