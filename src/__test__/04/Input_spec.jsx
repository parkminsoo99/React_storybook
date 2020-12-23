import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../03/Input';

describe('<Input>', () => {
	if('renders without crashing', () => {
	   expect(() => {
		shallow(<Input />);
	   }).not.toThrow();
	});
});