import React from 'react';
import {RepoShortType} from "../../types/SearchReposType";
import './repo.css'

type PropsType = {
    repo: RepoShortType
}


const Repo :React.FC<PropsType> = ({repo}) => {
    return (
        <div className='repo'>
            <div className = 'repo-header'>
                <div className = 'repo-header-name'>{repo.name}</div>
                <div className = 'repo-header-stars'>{repo.stargazers_count}</div>
            </div>
            <div className = 'repo-last-commit'>{repo.updated_at}</div>
            <a href={repo.html_url} className='repo-link'>Link to repository: {repo.html_url}</a>
        </div>
    );
};

export default Repo;