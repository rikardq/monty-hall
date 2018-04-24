import React from 'react';
import MontyHallForm from "../../components/MontyHallForm";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const component = shallow(<MontyHallForm/>);
    expect(component).toMatchSnapshot();
});
