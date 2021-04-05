import instance from "./instance";
import {SearchReposType} from "../types/SearchReposType";
import { FullRepoType } from "../types/repoType";

export const reposAPI = {
    getRepos:(searchQuery = 'stars:%3E1', currentPage : number, perPage: number)=>{
        return(
            instance.get<SearchReposType>(`search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
        )
    },
    getCurrentRepo:(username:string, repoName:string) =>{
        return(
            instance.get<FullRepoType>(`https://api.github.com/repos/${username}/${repoName}`)
        )
    }
}
