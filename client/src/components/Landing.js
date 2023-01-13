import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {

    render() {
        console.log("[DEBUG] render header component, this props = ", this.props);
        return (
            <div style={{ textAlign: 'center', borderStyle: 'solid', borderColor: 'yellow', borderWidth: '2px'}}>
                <h1>
                    Emaily!
                </h1>
                Collect feeback form your users
            </div>
        );
    }
}

export default connect()(Landing);
