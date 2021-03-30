import React, {useEffect} from 'react';
import {useActions} from "../hooks/useActions";
import {useTypesSelector} from "../hooks/useTypesSelector";
import Repo from './Repo/Repo';


const RepoSearch: React.FC = () => {
    const {getRepos} = useActions();
    const items = useTypesSelector(state => state.repo.items);

    useEffect(()=>{
        getRepos();
    },[])

    return (
        <div>
            {
                items.map(repo=>
                    <Repo key = {repo.id} repo = {repo}/>)
            }
        </div>
    );
};

export default RepoSearch;