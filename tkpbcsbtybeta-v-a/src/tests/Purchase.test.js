import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Purchase from '../Components/Purchase';

describe('Test rendering', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Purchase />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});