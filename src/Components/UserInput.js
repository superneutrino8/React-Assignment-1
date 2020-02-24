import React, { Component } from 'react';

class UnserInput extends Component {
    render(props) {
        return (
            <div>
                <input type="text" onChange={this.props.typed} />
            </div>
        );
    }
}

export default UnserInput;