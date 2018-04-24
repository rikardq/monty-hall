import React from 'react';
import App from '../App.js';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const component = shallow(<App>Facebook</App>);
    expect(component).toMatchSnapshot();
});
