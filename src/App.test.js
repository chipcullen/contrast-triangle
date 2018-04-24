import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { calculateContrast } from './utils/calculate-contrast';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Contrast Calculations', () => {
  it('correct contrast calculation black, white', () => {
    expect(calculateContrast('#000000', '#ffffff')).toBe(21);
  });

  it('correct contrast calculation black, black', () => {
    expect(calculateContrast('#000000', '#000000')).toBe(1);
  });

  it('correct contrast calculation black, blue', () => {
    expect(calculateContrast('#000000', '#0000ff')).toBe(2.44);
  });

  it('correct contrast calculation black, red', () => {
    expect(calculateContrast('#000000', '#ff0000')).toBe(5.25);
  });
});
