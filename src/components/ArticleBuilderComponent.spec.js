import ArticleBuilder, {EMPTY_TEXT_BLOCK_DATA, EMPTY_PRODUCT_BLOCK_DATA} from './ArticleBuilderComponent';
import React from 'react';
import {shallow} from 'enzyme';


describe('ArticleBuilderComponent', () => {

    let component;
    let addNewBlockStub;
    let articleProp;
    let updateArticleAtIndexStub;

    beforeEach(() => {
        articleProp = [{}];
        addNewBlockStub = sinon.stub();
        updateArticleAtIndexStub = sinon.stub();
        component = shallow(<ArticleBuilder addNewBlock={addNewBlockStub} article={articleProp} updateArticleAtIndex={updateArticleAtIndexStub} />);
    });

    describe('article dashboard', () => {

        it('should have a place to display the blocks that currently make up an article', () => {
            expect(component.find('ArticleDashboard')).to.have.length(1);
        });

        it('should pass the article on props', () => {
            expect(component.find('ArticleDashboard').props().article).to.equal(articleProp);
        });

        it('should pass the updateArticleAtIndex on props', () => {
            expect(component.find('ArticleDashboard').props().updateArticleAtIndex).to.equal(updateArticleAtIndexStub);
        });

    });


    describe('adding a text block', () => {

        it('should have an add button', () => {
            expect(component.find('.btn')).to.have.length(1);
        });

        it('should append a new block to the article data', () => {
            component.find('.btn').simulate('click');
            expect(addNewBlockStub).to.have.been.calledOnce
                .and.calledWith(EMPTY_TEXT_BLOCK_DATA);
        });

    });


});
