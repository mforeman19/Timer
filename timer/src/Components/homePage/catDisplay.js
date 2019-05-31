import React, { Components } from 'react';

export default class CatDisplay extends React.Component {
    render () {
        return (
            <div className="catPic">
            {this.props.picture ? (<img src={this.props.picture}  height="auto" width="100%"/>) : null}
            </div>
        )
    }
}