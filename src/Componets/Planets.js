import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import FilterNumber from './FilterNumber';

function Planet() {
  const { setfilterByName } = useContext(Context);
  const {
    filterByNumericValues,
    setfilterByNumericValues,
  } = useContext(Context);
  const [filterByNumeric, setfilterByNumeric] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const cabeçalho = [
    'name', 'rotation_period', 'orbital_period',
    'diameter', 'climate', 'gravity',
    'terrain', 'surface_watter', 'population',
    'films', 'created', 'edited', 'url',
  ];

  const { column, comparison, value } = filterByNumeric;
  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ (e) => setfilterByNumeric({ ...filterByNumeric,
          column: e.target.value }) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        id="comparison"
        value={ comparison }
        onChange={ (e) => setfilterByNumeric({ ...filterByNumeric,
          comparison: e.target.value }) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        name="value"
        id="value"
        value={ value }
        onChange={ (e) => setfilterByNumeric({ ...filterByNumeric,
          value: e.target.value }) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => setfilterByNumericValues([
          ...filterByNumericValues, filterByNumeric]) }
      >
        Fil
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
        <FilterNumber />
      </table>
    </div>
  );
}
export default Planet;
