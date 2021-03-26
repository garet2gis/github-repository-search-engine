import React from "react";
import ReactDOM from "react-dom";
import './styles/styles.css';


const App = () => (
    <h1 className={'some'}>My React and TypeScript App!</h1>
);

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
