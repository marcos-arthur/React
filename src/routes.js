import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainPage from './Pages/main/index';

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={MainPage}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;