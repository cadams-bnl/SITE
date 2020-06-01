import React from 'react';
import {shallow} from 'enzyme';

import Contact from './Contact';

describe('About page', () => {
    it('should render without crashing', () => {
        const contactPage = shallow(<Contact />)
    })
});