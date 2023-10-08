import { MoviesResponse } from "./interfaces/movies-response";
import { SimpleMovie } from "./interfaces/simple-movies";
import { MoviesGrid } from "./components/MoviesGrid";
import { Navbar } from "../../components";
import { options } from '../services/api'

const getMovies = async( ):Promise<SimpleMovie[]> => {
    const data:MoviesResponse = await fetch('https://api.themoviedb.org/3/movie/popular?language=es-ES', options)
    .then( res => res.json() );

    const movies = data.results.map( movie => ({
        id: movie.id!,
        title: movie.title!,
        poster_path: movie.poster_path!,
        vote_average: movie.vote_average!,
    }));

    // throw new Error('Error');
    return movies;
}

export default async function MoviesPage() {

    const movies = await getMovies();

    return (
        <>
        <Navbar />
        <div className="flex flex-col m-1 bg-grey-100 container mx-auto">
            <span className="md:text-3xl text-1xl font-bold text-center my-5 py-2 bg-filmcard">Películas más populares del momento</span>
            
            <div className="p-5 pt-0">
                <MoviesGrid movies={ movies } />
            </div>
        </div>
        </>
    )
}
