import React from 'react';
import {shallow} from 'enzyme';

import Services from './Services';

describe('Services page', () => {
    it('should render without crashing', () => {
        const servicesPage = shallow(<Services />)
    })
});