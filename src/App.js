import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { PageNotFound } from './components/sharedComponent';
import ReactLifeCycleCounter from './components/ReactLifeCycleCounter';
import AsyncAwaitPromise from './components/AsyncAwaitPromise';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/ReactLifeCycleCounter" component={ReactLifeCycleCounter} />
                    <Route exact path="/AsyncAwaitPromise" component={AsyncAwaitPromise} />
                    <Route exact path="/404" component={PageNotFound} />
                    <Redirect to="/404" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
