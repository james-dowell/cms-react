import React from 'react';
import _ from 'lodash';

class TextBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = { block: props.block };
    }

    handleChange(change) {
        let update = _.chain(this.state.block).clone().merge(change).value();
        this.setState({ block: update });
        this.props.updateArticleAtIndex(update, this.props.index);
    }

    render() {
        const { block } = this.props;
        const { title, body } = this.state.block;

        return (
            <div>
                <div className="form-group">
                    <label>Title:</label><input className="form-control" type="text" name="title" value={title} onChange={(e) => this.handleChange({ title: e.target.value })} />
                    <label>Body:</label><textarea name="body" value={body} className="form-control" onChange={(e) => this.handleChange({ body: e.target.value })}></textarea>
                </div>
            </div>
        )
    }

}

TextBlock.propTypes = {
    index: React.PropTypes.number.isRequired,
    block: React.PropTypes.object.isRequired,
    updateArticleAtIndex: React.PropTypes.func.isRequired
};

export default TextBlock;
