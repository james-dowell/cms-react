import TextBlock from './TextBlockComponent';
import React from 'react';
import {shallow} from 'enzyme';

const block = {
    type: 'text',
    title: null,
    body: null
};

describe('TextBlockComponent', () => {

    let component;
    let block = {
        type: 'text',
        title: null,
        body: null
    };

    beforeEach(() => {
        component = shallow(<TextBlock block={block}/>)
    });

    it('should render a text input for the title', () => {
        expect(component.find('input[type="text"]')).to.have.length(1);
    });

    it('should render a textarea for the body content', () => {
        expect(component.find('textarea')).to.have.length(1);
    });

});
