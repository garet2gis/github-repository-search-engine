import React from "react";

import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import { hot } from "react-hot-loader";

const App : React.FC = () => {
    const a = 'react6';
    return (
        <div>
            {a}
            <UserList/>
            <hr/>
            <TodoList/>
        </div>
    );
}


declare let module: Record<string, unknown>;
export default hot(module)(App);