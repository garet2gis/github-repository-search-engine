import {Dispatch} from "redux";
import axios from "axios";
import {
    FetchTodoAction, FetchTodoErrorAction,
    FetchTodoSuccessAction,
    SetTodoPageAction,
    TodoAction,
    TodoActionTypes
} from "../../types/todo";
import {AppThunk} from "../../types/thunk";


export const fetchTodos = () : FetchTodoAction=>{
    return {
        type: TodoActionTypes.FETCH_TODOS,
    }
}

export const fetchTodosSuccess = (payload : any[]) : FetchTodoSuccessAction=>{
    return {
        type: TodoActionTypes.FETCH_TODOS_SUCCESS,
        payload,
    }
}

export const fetchTodosError = (payload : string) : FetchTodoErrorAction=>{
    return {
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload,
    }
}

export const setTodoPage = (page: number): SetTodoPageAction => {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page};
}

export const getTodos = (page = 1, limit = 10) : AppThunk => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch(fetchTodos());
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            });
            setTimeout(() => {
                dispatch(fetchTodosSuccess(response.data));
            }, 500)
        } catch (e) {
            dispatch(fetchTodosError('Error loading todos'));
        }
    }
}