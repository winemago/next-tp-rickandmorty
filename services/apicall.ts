export const FetchAllCharacters = async () => {
    try {
        const res = await fetch(process.env.RAM_URL + 'character')
        const data = await res.json()
        return data
        
    } catch (error) {
        return error
    }
}