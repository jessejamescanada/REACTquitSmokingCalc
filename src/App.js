import React from 'react';
import './App.css';
import InputHooks from './components/InputHooks'


function App() {
  return (
    <div className="container">
     <InputHooks  text={{title: 'Quit Smoking Calculator'}} />
    </div>
  );
}

export default App;
