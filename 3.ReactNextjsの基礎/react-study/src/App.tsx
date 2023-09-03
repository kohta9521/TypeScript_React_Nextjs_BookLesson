import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import Parent from './components/ContainerSample';

function App() {
  return (
    <div className="App">
      <Hello />
      <Name />
      <Message />
      <Parent />
    </div>
  );
}

export default App;
