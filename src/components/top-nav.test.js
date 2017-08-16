import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';


describe('<TopNav />', () => {
	it('Render without crashing', () => {
		shallow(<TopNav />);
	});

	it('Should show info when what is clicked', () => {
		const callback = jest.fn();
		const wrapper = mount(<TopNav onInfo={callback} />);
		wrapper.find('.what').simulate('click');
		expect(callback).toHaveBeenCalledWith();
	});

	it('Should render new game when new game is clicked', () => {
		const callback = jest.fn();
		const wrapper = mount(<TopNav onNewGame={callback} />);
		wrapper.find('.new').simulate('click');
		expect(callback).toHaveBeenCalledWith();
	});
});