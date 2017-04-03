import ArticleDashboard from './ArticleDashboardComponent';
import React from 'react';
import {shallow} from 'enzyme';
import {EMPTY_TEXT_BLOCK_DATA} from '../ArticleBuilderComponent';
import TextBlock from './TextBlockComponent.js';

describe('ArticleDashboard', () => {

    it('should render a text block when a text block is within an article', () => {
        let article = [EMPTY_TEXT_BLOCK_DATA];
        let component = shallow(<ArticleDashboard article={article} />);
        expect(component.find(TextBlock)).to.have.length(1);
    });

});
