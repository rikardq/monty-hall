import React from 'react';
import MontyHallResult from "../../components/MontyHallResult";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
    const resultData = {
        numberOfLosses: 51,
        numberOfWins: 49,
        gameStrategy: 'RANDOM',
        numberOfSimulations: 100,
        winPercentage: 49.0
    };

    const component = shallow(<MontyHallResult results={ [resultData] }/>);
    expect(component).toMatchSnapshot();
});
