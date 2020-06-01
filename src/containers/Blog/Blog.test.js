import React from 'react';
import {shallow} from 'enzyme';

import Blog from './Blog';

describe('Blog page', () => {
    it('should render without crashing', () => {
        const blogPage = shallow(<Blog />)
    })
});