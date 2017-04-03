import {connect} from 'react-redux';
import React from 'react';
import ArticleDashboard from './article-blocks/ArticleDashboardComponent';
import * as _ from 'lodash';

export const EMPTY_TEXT_BLOCK_DATA = {
    "type": "text",
    "title": '',
    "body": ''
}

export default class ArticleBuilderComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    handleCreate(block) {
        this.props.addNewBlock(_.clone(block));
    }

    render() {
        const { addNewBlock, article, updateArticleAtIndex } = this.props;
        return (
            <div>
                <div>
                    <ArticleDashboard article={article} updateArticleAtIndex={updateArticleAtIndex} />
                </div>
                <button className="btn btn-primary" onClick={() => this.handleCreate(EMPTY_TEXT_BLOCK_DATA)}>+ Text block</button>
            </div>
        );
    }

}
