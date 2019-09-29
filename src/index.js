import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import HomePage from '@/pages/homepage/HomePage';

import './initiate.scss';
import './index.scss';

class AeonComponent extends Component {

    render() {
        return (
            <div className="main">
                <Router basename={'/'}>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

ReactDOM.render(<AeonComponent />, document.getElementById('root'))