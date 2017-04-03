import App from './App';
import React from 'react';
import {shallow} from 'enzyme';
import ShowArticle from './ShowArticleComponent';
import ArticleBuilder from './ArticleBuilderComponent';

describe('App Component', () => {

    let component;

    beforeEach(() => {
        component = shallow(<App />);
    });

    it('should show have the component to show the current state of the article', () => {
        expect(component.find(ShowArticle)).to.have.length(1);
    });

    it('should have a method for adding a new text block to the data', () => {
        let textBlock = {
            "type": "text",
            "title": "This is a title",
            "body": "This is body text"
        };
        component.instance().addNewBlock(textBlock);
        expect(component.state('article')).to.deep.equal([textBlock]);
    });

    it('should have an article builder component', () => {
        expect(component.find(ArticleBuilder)).to.have.length(1);
    });

    it('should pass the appropriate props', () => {
        let props = component.find(ArticleBuilder).props();
        let instance = component.instance();
        expect(props.article).to.deep.equal([]);
        expect(props.addNewBlock).to.be.a('Function');
        expect(props.updateArticleAtIndex).to.be.a('Function');
    });

    describe('Updating article', () => {

        let textBlock = {
            "type": "text",
            "title": "This is a title",
            "body": "This is body text"
        };

        beforeEach(() => {
            component.instance().addNewBlock(textBlock);
        });

        it('should have a method to update the article', () => {
            let update = {
                "type": "text",
                "title": "New title",
                "body": "This is body text"
            };
            let index = 0;
            component.instance().updateArticleAtIndex(update, index);
            expect(component.state('article')[index].title).to.equal('New title');
        });

    });

});
