import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filterByName, setfilterByName] = useState('');

  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const getPlanetsList = async () => {
      const { results } = await fetch(endPoint).then((resposta) => resposta.json());

      setPlanets(results);
    };
    getPlanetsList();
  }, []);

  const context = {
    planets,
    setPlanets,
    filterByName,
    setfilterByName,
    filterByNumericValues,
    setfilterByNumericValues,

  };
  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
