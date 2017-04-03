import React from 'react';
import TextBlock from './TextBlockComponent';

const AVAILABLE_COMPONENTS = {
    'text': TextBlock
}

export default class ArticleDashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    getBlockComponenet(block, index) {
        let Component = AVAILABLE_COMPONENTS[block.type];
        return (<Component key={index} index={index} block={block} updateArticleAtIndex={this.props.updateArticleAtIndex} />);
    }

    render() {
        const article = this.props.article;

        return (
            <div>
                {article.map((b, i) => this.getBlockComponenet(b, i))}
            </div>
        )
    }
}

ArticleDashboard.propTypes = {
    article: React.PropTypes.array.isRequired,
    updateArticleAtIndex: React.PropTypes.func.isRequired
};
