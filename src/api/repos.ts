import instance from "./instance";
import {AxiosResponse} from "axios";
import {FullRepoType, SearchReposType } from "../types/repos";
import { ContributorType } from "../types/card";


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
