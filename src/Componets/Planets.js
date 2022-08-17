import React, { useEffect, useState } from 'react';

function Planet() {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setfilterByName] = useState({});
  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const getPlanetsList = async () => {
      const { results } = await fetch(endPoint).then((resposta) => resposta.json());
      setPlanets(results);
    };
    getPlanetsList();
  }, []);

  const cabeçalho = [
    'name', 'rotation_period', 'orbital_period',
    'diameter', 'climate', 'gravity',
    'terrain', 'surface_watter', 'population',
    'films', 'created', 'edited', 'url',
  ];

  const filterNamePlanets = () => planets.filter(({ name }) => name.toLowerCase()
    .includes(filterByName));

  return (
    <div>
      <select data-testid="column-filter">
        <option> population</option>
        <option> orbital_period</option>
        <option> diameter</option>
        <option> rotation_period</option>
        <option> surface_water</option>
      </select>
      <select data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input data-testid="value-filter" />
      <button
        data-testid="button-filter"
        type="button"
      >
        filtre
      </button>
      <br />
      <input
        data-testid="name-filter"
        onChange={ (e) => setfilterByName(e.target.value) }
      />
      <table>
        <thead>
          <tr>
            {cabeçalho.map((clacificação, i) => (<th key={ i }>{clacificação}</th>))}
          </tr>
        </thead>
        {filterNamePlanets().map((results) => (
          <tbody key={ results.name }>
            <tr>
              <td>{results.name}</td>
              <td>{results.rotation_period}</td>
              <td>{results.orbital_period}</td>
              <td>{results.diameter}</td>
              <td>{results.climate}</td>
              <td>{results.gravity}</td>
              <td>{results.terrain}</td>
              <td>{results.surface_watter}</td>
              <td>{results.population}</td>
              <td>{results.films}</td>
              <td>{results.created}</td>
              <td>{results.edited}</td>
              <td>{results.url}</td>
            </tr>
          </tbody>))}
      </table>
    </div>
  );
}
export default Planet;
