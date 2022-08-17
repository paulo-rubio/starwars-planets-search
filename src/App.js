import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [busca, setBusca] = useState('');
  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const getPlanetsList = async () => {
      const { results } = await fetch(endPoint).then((resposta) => resposta.json());
      console.log(results);
    };
    getPlanetsList();
  }, []);

  return (
    <main>
      <h1>Lista De PLANETAS</h1>
    </main>
  );
}

export default App;
