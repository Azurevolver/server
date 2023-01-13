import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './payments';

class Header extends Component {

    renderSignInComponent() {
        switch (this.props.user) {
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
                    [
                        <li key='1'><Payments /></li>,
                        <li key='3' style={{ margin: '0 1em'}}>
                            Credits: {this.props.user.credits}
                        </li>,
                        <li key='2'><a href="/api/logout">logout</a></li>
                    ]
                );
        }
    }

    render() {
        console.log("[DEBUG] render header component, this props = ", this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to={this.props.user ? '/surveys' : '/'} 
                        className="left brand-logo"
                    >Emaily</Link>
                    <ul className="right">
                        {this.renderSignInComponent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {user: state.auth };
}

export default connect(mapStateToProps)(Header);
