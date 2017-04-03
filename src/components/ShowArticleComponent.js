import React from 'react';

export default class ShowArticle extends React.Component {
    render() {
        const article = this.props.article;

        return (
            <div>
                Current article: <pre>{JSON.stringify(article, null, 2)}</pre>
            </div>
        );
    }
}
