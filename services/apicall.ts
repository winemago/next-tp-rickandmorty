export const FetchAllCharacters = async (page:string) => {
    try {
        const res = await fetch(process.env.RAM_URL + `character/?page=${page}`)
        const data = await res.json()
        if (data.error) {
            return new Error('Failed to fetch data')
        }
        return data
        
    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}

export const FetchMultiEpisode = async (episodes: number[]) => {
    try {
        const res = await fetch(process.env.RAM_URL + `episode/${episodes}`)
        const data = await res.json()
        if (data.error) {
            return new Error('Failed to fetch data')
        }
        return data
        
    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}