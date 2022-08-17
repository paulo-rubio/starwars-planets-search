import React, { useEffect } from 'react';

function Planet() {
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
    <h1>{getPlanetsList.filter(!results)}</h1>
  );
}
export default Planet;
