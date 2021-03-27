import React from "react";
import './styles/styles.css';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";


const App : React.FC = () => {
    return (
        <div className={'some'}>
            <UserList/>
            <hr/>
            <TodoList/>
        </div>
    );
}

export default App;
