import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import Provider from '../context/Provider';
import userEvent from '@testing-library/user-event';
import mockData from './mocks'

beforeEach(() => {
  jest.spyOn(global, "fetch").mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  );
});
afterEach(() => {
  jest.resetAllMocks();
});


describe('', () => {
test('Test in APP', async () => {
  render(<App />);
  await waitFor(() => expect(fetch).toHaveBeenCalled())

  const  linhasDasTabelas = screen.getAllByRole('row');
  expect(linhasDasTabelas.length).toBe(11)
});
test('test in filter', async() => {
  await waitFor(() => render(<App />))

  const nameFilter = screen.getByTestId('name-filter')
  expect(nameFilter).toBeInTheDocument()

  userEvent.type(nameFilter, 'h')
  const  linhasDasTabelas = screen.getAllByRole('row');
  expect(linhasDasTabelas.length).toBe(3)
})
test('test in comparisons', async() => {
  await waitFor(() => render(<App />))

  const column = screen.getByTestId("column-filter");
  const comparison = screen.getByTestId("comparison-filter");
  const value = screen.getByTestId("value-filter");
  const button = screen.getByTestId("button-filter");

  expect(column).toBeInTheDocument()
  expect(column.children.length).toBe(5)
  expect(comparison).toBeInTheDocument()
  expect(comparison.children.length).toBe(3)
  expect(value).toBeInTheDocument()
  expect(value.type).toBe('text')
  expect(button).toBeInTheDocument()
})
test('test in values', async() => {
  await waitFor(() => render(<App />))

  const column = screen.getByTestId("column-filter");
  const comparison = screen.getByTestId("comparison-filter");
  const value = screen.getByTestId("value-filter");
  const button = screen.getByTestId("button-filter");

  userEvent.selectOptions(column, 'population')
  userEvent.selectOptions(comparison, 'menor que')
  userEvent.type(value, '3000')
  userEvent.click(button)

  const  linhasDasTabelas = screen.getAllByRole('row');
  expect(linhasDasTabelas.length).toBe(2)
})
test('test in maior que', async() => {
  await waitFor(() => render(<App />))

  const column = screen.getByTestId("column-filter");
  const comparison = screen.getByTestId("comparison-filter");
  const value = screen.getByTestId("value-filter");
  const button = screen.getByTestId("button-filter");


  userEvent.selectOptions(column, 'orbital_period')
  userEvent.selectOptions(comparison, 'maior que')
  userEvent.type(value, '100000000000')
  userEvent.click(button)




  const  linhasDasTabelas = screen.getAllByRole('row');
  expect(linhasDasTabelas.length).toBe(1)
})
})
