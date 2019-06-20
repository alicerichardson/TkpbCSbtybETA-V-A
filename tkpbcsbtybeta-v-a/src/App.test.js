import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './Components/NavBar';
import Info from './Components/Info';
import HomePage from './Components/HomePage';
import Movie from './Components/Movie'
import Schedule from './Components/Schedule';

describe('Test rendering', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('render Info page', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Info />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('render HomePage page', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomePage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('render NavBar page', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('render Schedule page', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Schedule />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('render Movie page', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Movie />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Test elements', () => {
  it('test that title exists', () => {
    const div = document.createElement('div');
  })
})

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2+2).toBe(4);
  });
});