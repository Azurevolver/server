import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    renderSignInComponent() {
        switch (this.props.doesUserSignIn) {
            case null:
                //  Still waiting for result
                return;
            case false:
                // logout
                return (
                    <li><a href='/auth/google'>Login with Google</a></li>
                )
            default:
                // login
                return (
                    <li><a href="sass.html">logout</a></li>
                );
        }
    }

    render() {
        console.log("[DEBUG] render header component, this props = ", this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">Emaily</a>
                    <ul className="right">
                        {this.renderSignInComponent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {doesUserSignIn: state.auth };
}

export default connect(mapStateToProps)(Header);
