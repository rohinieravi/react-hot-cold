import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './info-modal';


describe('<InfoModal />', () => {
	it('Render without crashing', () => {
		shallow(<InfoModal />);
	});

	it('Render infomodal overlay initially', () => {
		const wrapper = shallow(<InfoModal />);
		expect(wrapper.hasClass('overlay')).toEqual(true);
	});

	it('Should fire callback when Got it is clicked', () => {
		const callback = jest.fn();
		const wrapper = mount(<InfoModal onClose={callback}/>);
		wrapper.find('.close').simulate('click');
        expect(callback).toHaveBeenCalledWith();
	});
});