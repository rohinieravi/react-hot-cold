import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessForm />);
	});

	it('Renders the guess form initially', () => {
		const wrapper = shallow(<GuessForm />);
		expect(wrapper.hasClass('guess-form')).toEqual(true);
	});

	it('should fire onGuess callback when form is submitted', () => {
		const callback = jest.fn();
        const wrapper = mount(<GuessForm onGuess={callback} />);
        const value = '10';
        wrapper.find('input[type="text"]').node.value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
	});

	it('should not fire onGuess callback if input is empty', () => {
		const callback = jest.fn();
        const wrapper = mount(<GuessForm onGuess={callback} />);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalledWith();
	});
});