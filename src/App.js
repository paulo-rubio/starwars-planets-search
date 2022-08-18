import React from 'react';
import './App.css';
import Planet from './Componets/Planets';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Planet />
    </Provider>
  );
}

export default App;
