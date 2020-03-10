import React from 'react';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <p>Hi</p>
  //   </div>
  // );
  return React.createElement('div', {className: 'App'}, React.createElement('h1', null,"hello, world!"))
}

export default App;
