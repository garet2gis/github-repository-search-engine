import React, {useEffect} from 'react';
import {useTypesSelector} from "../hooks/useTypesSelector";
import {useActions} from "../hooks/useActions";
import '../styles/styles.css';

const TodoList: React.FC = () => {
    const {page, error, loading, todos, limit} = useTypesSelector(state => state.todo);
    const {getTodos,setTodoPage} = useActions();

    const pages = [1,2,3,4,5];

    useEffect(()=>{
        getTodos(page,limit);
    },[page,limit]);

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    console.log('TODO render')
    return (
        <div className={'some'}>
            {todos.map(todo =>
                <div key = {todo.id}>
                    {todo.id} - {todo.title}
                </div>)
            }
            <div style = {{display:'flex'}}>
            {pages.map(p=>
                <div key = {p}
                    style= {{border:p===page?'2px solid green':'1px solid gray',padding:10}}
                     onClick = {()=>setTodoPage(p)}
                >
                    {p}
                </div>
            )}
            </div>
        </div>
    );
};

export default TodoList;