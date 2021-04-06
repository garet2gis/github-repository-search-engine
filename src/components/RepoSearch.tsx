import React, {useEffect, useState} from 'react';
import {useActions} from "../hooks/useActions";
import {useTypesSelector} from "../hooks/useTypesSelector";
import Repo from './Repo/Repo';
import {createPages} from "../utils/pagesCreator";
import './repo-search.less'

const RepoSearch: React.FC = () => {
    const {getRepos, setCurrentPage} = useActions();
    const {items: repos, isFetching, currentPage, isFetchingError, perPage, totalCount} = useTypesSelector(state => state.repo)

    const [searchValue, setSearchValue] = useState("")

    const pagesCount = Math.ceil(totalCount / perPage)
    const pages: Array<number> = []
    createPages(pages, pagesCount, currentPage)

    useEffect(() => {
        getRepos(currentPage, perPage, searchValue);
    }, [currentPage])

    const searchHandler = () => {
        setCurrentPage(1)
        getRepos(currentPage, perPage, searchValue)
    }

    return (
        <div>
            {isFetchingError &&
            <div className="alert alert-danger" role="alert">
                Произошла ошибка! Пожалуйста обновите страницу!
            </div>
            }
            <div className="search">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text"
                       placeholder="Input repo name" className="search-input"/>
                <button onClick={() => searchHandler()} className="search-btn">Search</button>
            </div>
            {
                !isFetching
                    ?
                    repos.map(repo =>
                        <Repo key={repo.id} repo={repo}/>)
                    :
                    <div className="fetching"/>
            }
            <div className="pages">
                {pages.map((page, index) => <span
                    key={index}
                    className={currentPage == page ? "current-page" : "page"}
                    onClick={() => setCurrentPage(page)}>{page}</span>)}
            </div>
        </div>
    );
};

export default RepoSearch;