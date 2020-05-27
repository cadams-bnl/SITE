import React from 'react';
import {shallow} from 'enzyme';

import NavBar from './NavBar';

describe('NavBar page', () => {
    it('should render without crashing', () => {
        const navbarPage = shallow(<NavBar />)
    })
});