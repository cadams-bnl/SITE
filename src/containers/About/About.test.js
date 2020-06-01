import React from 'react';
import {shallow} from 'enzyme';

import About from './About';

describe('About page', () => {
    it('should render without crashing', () => {
        const aboutPage = shallow(<About />)
    })
});