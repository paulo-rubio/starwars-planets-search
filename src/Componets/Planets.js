import React, { useContext, useEffect, useState } from 'react';
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
  const Columnfilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  // https://melvingeorge.me/blog/remove-elements-contained-in-another-array-javascript
  const collumFilterForDiferenc = Columnfilter.filter(
    (column) => !filterByNumericValues.some((e) => column === e.column),
  );
    // componnetDidMount
  useEffect(() => {
    setfilterByNumeric((p) => ({ ...p, column: collumFilterForDiferenc[0] }));
  }, [filterByNumericValues]);

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
        {collumFilterForDiferenc.map((collumn) => (
          <option key={ collumn } value={ collumn }>
            {collumn}
          </option>
        ))}
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
