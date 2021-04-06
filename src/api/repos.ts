import instance from "./instance";
import {SearchReposType} from "../types/SearchReposType";
import {FullRepoType} from "../types/FullRepoType";
import {AxiosResponse} from "axios";
import {ContributorType} from "../types/ContributorType";

export const reposAPI = {
    getRepos: (searchQuery = 'stars:%3E1', currentPage: number, perPage: number): Promise<AxiosResponse<SearchReposType>> => {
        return (
            instance.get<SearchReposType>(`search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
        )
    },
    getCurrentRepo: (username: string, repoName: string): Promise<AxiosResponse<FullRepoType>> => {
        return (
            instance.get<FullRepoType>(`https://api.github.com/repos/${username}/${repoName}`)
        )
    },
    getContributors: (username: string, repoName: string): Promise<AxiosResponse<Array<ContributorType>>>  => {
        return (
            instance.get<Array<ContributorType>>(`https://api.github.com/repos/${username}/${repoName}/contributors?page=1&per_page=10`)
        )
    }
}
