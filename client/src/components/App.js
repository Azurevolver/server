import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions'


const Dashboard = () => (<h2>Dashboard</h2>)
const SurveyNew = () => (<h2>SurveyNew</h2>)
const Landing = () => (<h2>Landing</h2>)


class App extends Component {
    componentDidMount() {
        console.log("[DEBUG] FE App component did mount, triggering action");
        this.props.fetchUser();
    }

    render() {
        return (
            <div className='container'>
                <BrowserRouter>
                {/* only allowed to have ONE component inside */}
                    <div>
                        <Header />
                        <Route exact={true} path="/" component={Landing} />
                        <Route exact={true} path="/surveys" component={Dashboard} />
                        <Route exact={true} path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);