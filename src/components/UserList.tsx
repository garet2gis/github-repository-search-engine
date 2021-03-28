import React, {useEffect} from 'react';
import {useTypesSelector} from "../hooks/useTypesSelector";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const {users, error, loading} = useTypesSelector(state => state.user);
    const {getUsers} = useActions()

    useEffect(()=>{
        getUsers();
    },[])

    if (loading){
        return <h1>Идет загрузка...</h1>
    }
    if (error){
        return <h1>{error}</h1>
    }
    console.log('USER render')
    return (
        <div>
            {users.map(user=>
                <div key = {user.id}>{user.name}</div>
            )}
        </div>
    );
};

export default UserList;