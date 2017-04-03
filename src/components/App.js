import ShowArticle from './ShowArticleComponent';
import ArticleBuilderComponent from './ArticleBuilderComponent';
import React from 'react';
import _ from 'lodash';

const INITIAL_STATE = {
    article: []
};

export default class App extends React.Component {

    constructor() {
        super();
        this.state = _.clone(INITIAL_STATE);
    }

    addNewBlock(block) {
        const article = _.clone(this.state.article);
        article.push(block);
        this.setState({ article });
    }

    updateArticleAtIndex(update, index) {
        let updatedArticle = _.clone(this.state.article);
        _.merge(updatedArticle[index], update);
        this.setState({ article: updatedArticle });
    }

    render() {
        return (
            <div>
                <div>
                    <ArticleBuilderComponent
                        article={this.state.article}
                        addNewBlock={this.addNewBlock.bind(this)}
                        updateArticleAtIndex={this.updateArticleAtIndex.bind(this)} />
                </div>
                <ShowArticle article={this.state.article} />
            </div>
        );
    }
}
