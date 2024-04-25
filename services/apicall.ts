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

export const FetchMultiCharacter = async (id1:string, id2:string) => {
    try {
        const res = await fetch(process.env.RAM_URL + `character/${id1}${id2}`)
        const data = await res.json()
        if (data.error) {
            return new Error('Failed to fetch data')
        }
        return data
        
    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}