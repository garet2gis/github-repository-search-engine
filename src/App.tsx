import React from "react";
import {hot} from "react-hot-loader";
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import RepoSearch from "./components/RepoSearch";
import Error from "./components/Error";
import './app.less'
import Card from "./components/Card/Card";



const App: React.FC = () => {
    return (
        <HashRouter>
            <div className={'container'}>
                <Switch>
                    <Route exact path='/search' component={RepoSearch}/>
                    <Route path="/card/:username/:reponame" component={Card}/>
                    <Route path="/error" component={Error}/>
                    <Redirect to="/search"/>
                </Switch>
            </div>
        </HashRouter>
    );
}


declare let module: Record<string, unknown>;
export default hot(module)(App);