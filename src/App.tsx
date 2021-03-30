import React from "react";
import {hot} from "react-hot-loader";
import {BrowserRouter, Route} from 'react-router-dom'
import RepoSearch from "./components/RepoSearch";
import './styles/styles.css'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className={'container'}>
                <Route path='/' component={RepoSearch}/>
            </div>
        </BrowserRouter>
    );
}


declare let module: Record<string, unknown>;
export default hot(module)(App);