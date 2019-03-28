import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';


import Base from './layouts/base/Base';
import Todo from './pages/Todo/Todo';
import Done from './pages/Done/Done';

import './index.css';

export const newStore = () => {
    return createStore(
        ()=>{},
        applyMiddleware(thunk),
    );
};

const store = createStore(() => {
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Base>
                <Route exact path={"/"} component={Todo}/>
                <Route path={"/done"} component={Done}/>
            </Base>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);