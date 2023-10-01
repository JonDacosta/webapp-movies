const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTBjOWYyMzI0M2M5NTkxNjVmZDk3NTNkOGRmZjUzZSIsInN1YiI6IjY1MTRhNzNjYmRkNTY4MDBlNDZiNjhjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AxOgaOfeonCf3a4GT1ahG0LLFReyM9HMF8namSMD74k'
    },
};


export const searchMovies = async ({ search }):any => {
    if (search === '') return null

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=es-ES&page=1`, options)
        const json = await response.json()

        const movies = json.results

        return movies?.map( movie => ({
            id: movie.id!,
            title: movie.title!,
            poster_path: movie.poster_path!,
            vote_average: movie.vote_average!,
        }))
    } catch (e) {
        throw new Error('Error al buscar la película')
    }
}