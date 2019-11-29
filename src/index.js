import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '@/pages/homepage/HomePage';
import Login from '@/pages/homepage/login/Login';
import Register from '@/pages/homepage/register/Register';
import SetupMenu from '@/pages/setupmenu/SetupMenu';
import MainStage from '@/pages/mainstage/MainStage';
import Test from '@/test/Test';

import './initiate.scss';
import './index.scss';

class AeonComponent extends Component {

    render() {
        return (
            <div className="main">
                <Router basename={'/'}>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/setup' component={SetupMenu}/>
                        <Route path='/floor' component={MainStage}/>
                        <Route path='/test' component={Test}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

ReactDOM.render(<AeonComponent />, document.getElementById('root'));