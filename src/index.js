import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';

import Base from './layouts/base/Base';
import LoginLayout from './layouts/loginLayout/LoginLayout';
import Inbox from './pages/inbox/Inbox';
import Done from './pages/done/Done';
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import store from './store/store';

import './index.css';

const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
const myEnv = dotenv.config()
dotenvExpand(myEnv)


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/signin" render={() => (
                    <LoginLayout>
                        <Route component={SignIn}/>
                    </LoginLayout>
                )}/>
                <Route path="/signup" render={() => (
                    <LoginLayout>
                        <Route component={SignUp}/>
                    </LoginLayout>
                )}/>
                <Route path="/" render={() => (
                    <Base>
                        <Route exact path="/" component={Inbox}/>
                        <Route path="/done" component={Done}/>
                    </Base>
                )}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);