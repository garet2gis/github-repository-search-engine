import instance from "./instance";

export const reposAPI = {
    getRepos:(searchQuery = 'stars:%3E1')=>{
        return(
            instance.get(`search/repositories?q=${searchQuery}&sort=stars`)
        )
    }
}
