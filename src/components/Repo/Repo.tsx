import React from 'react';
import { NavLink } from 'react-router-dom';
import { RepoShortType } from '../../types/repos';
import './repo.less'

type PropsType = {
    repo: RepoShortType
}


const Repo :React.FC<PropsType> = ({repo}) => {
    return (
        <div className='repo'>
            <div className = 'repo-header'>
                <div className = 'repo-header-name'><NavLink to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink></div>
                <div className = 'repo-header-stars'>Stars: {repo.stargazers_count}</div>
            </div>
            <div className = 'repo-last-commit'>{repo.updated_at}</div>
            <a href={repo.html_url} className='repo-link'>Link to repository: {repo.html_url}</a>
        </div>
    );
};

export default Repo;