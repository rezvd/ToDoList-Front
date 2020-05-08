import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux'


import Base from './layouts/base/Base';
import Inbox from './pages/inbox/Inbox';
import Done from './pages/done/Done';
import store from './store/store'

import './index.css';



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Base>
                <Route exact path={"/"} component={Inbox}/>
                <Route path={"/done"} component={Done}/>
            </Base>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);