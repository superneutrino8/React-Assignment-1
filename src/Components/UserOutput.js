import React, { Component } from 'react';

class UserOutput extends Component {
    render(props) {
        return (
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores nostrum non alias dolorum corporis quo ducimus at aliquid quia.</p>
                <p>UserName: {this.props.userName}</p>
            </div>
        );
    }
}

export default UserOutput;