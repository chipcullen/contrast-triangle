import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { calculateContrast } from './utils/calculate-contrast';
import { getLuminance } from './utils/get-luminance';
import { hexToRgb } from './utils/hex-to-rgb';

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

  it('correct contrast calculation black, hotpink', () => {
    expect(calculateContrast('#000000', '#ff69b4')).toBe(7.93);
  });
});

describe('Luminance Calculations', () => {
  it('correct luminance for black', () => {
    expect(getLuminance(0, 0, 0)).toBe(0);
  });

  it('correct luminance for white', () => {
    expect(getLuminance(255, 255, 255)).toBe(1);
  });

  it('correct luminance for hotpink', () => {
    expect(getLuminance(255, 105, 180)).toBe(0.3465843816971475);
  });
});

describe('Hex to RGB conversion', () => {
  it('correct rgb for black', () => {
    expect(hexToRgb('#000000')[0]).toBe(0);
    expect(hexToRgb('#000000')[1]).toBe(0);
    expect(hexToRgb('#000000')[2]).toBe(0);
  });

  it('correct rgb for white', () => {
    expect(hexToRgb('#ffffff')[0]).toBe(255);
    expect(hexToRgb('#ffffff')[1]).toBe(255);
    expect(hexToRgb('#ffffff')[2]).toBe(255);
  });

  it('correct rgb for hotpink', () => {
    expect(hexToRgb('#ff69b4')[0]).toBe(255);
    expect(hexToRgb('#ff69b4')[1]).toBe(105);
    expect(hexToRgb('#ff69b4')[2]).toBe(180);
  });
});
