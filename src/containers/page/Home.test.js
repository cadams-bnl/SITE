import React from 'react';
import {shallow} from 'enzyme';

import Home from './Home';

describe('Home page', () => {
    it('should render without crashing', () => {
        const homePage = shallow(<Home />)
    })
});