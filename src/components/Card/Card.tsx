import React, {useEffect} from 'react';
import {useParams} from "react-router-dom"
import './card.less'
import {RouteComponentProps} from 'react-router-dom'
import {useActions} from "../../hooks/useActions";
import {useTypesSelector} from "../../hooks/useTypesSelector";


type TParams = {
    username: string
    reponame: string
}

const Card: React.FC<RouteComponentProps> = (props) => {
    const {username, reponame} = useParams<TParams>()
    const {getCurrentRepo,getContributors} = useActions();
    const {repo,contributors} = useTypesSelector(state => state.card);

    useEffect(() => {
        getCurrentRepo(username, reponame)
        getContributors(username,reponame)
    }, [])

    return (
        <div>
            <button onClick={() => props.history.goBack()} className="back-btn">BACK</button>
            <div className="card">
                <img src={repo?.owner?.avatar_url} alt=""/>
                <div className="name">{repo?.name}</div>
                <div className="stars">{repo?.stargazers_count}</div>
            </div>
            {contributors.map((c, index) =>
                <div key = {c.id}>{index + 1}. {c.login}</div>
            )}

        </div>
    );
};

export default Card;