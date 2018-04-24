import React from 'react';
import MontyHallContainer from "../../components/MontyHallContainer";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const component = shallow(<MontyHallContainer/>);
    expect(component).toMatchSnapshot();
});
