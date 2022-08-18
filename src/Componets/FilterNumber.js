import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterNumber() {
  const { filterByNumericValues, planets, filterByName } = useContext(Context);

  const filterPlanets = planets
    .filter(({ name }) => name.toLowerCase().includes(filterByName))
    .filter((planet) => filterByNumericValues.every(({ column, comparison, value }) => {
      if (comparison === 'menor que') {
        return +planet[column] < +value;
      } if (comparison === 'maior que') {
        return +planet[column] > +value;
      }
      return +planet[column] === +value;
    }));

  return (
    <tbody>
      {filterPlanets.map((planet) => (
        <tr key={ planet.name }>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_watter}</td>
          <td>{planet.population}</td>
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default FilterNumber;
