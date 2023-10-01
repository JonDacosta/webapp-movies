import { Input, Button, Divider } from '@nextui-org/react';
import { FormEvent, useState, useEffect, useRef } from 'react';
import { allMovies } from "../../hooks/useMovies";
import style from '../PopularMovies.module.css';
import { MoviesCard } from './MoviesCard';

// interface Props {
//     movies: SimpleMovie[];
// }

function ListOfMovies({ movies }):any {

    return (
        <>
            <div className="p-3 justify-center items-center">
                <ul className={ style.moviesBox }>
                    {
                        movies.map( movie => (
                            <MoviesCard key={ movie.id } movie={ movie }/>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

function NoMoviesResults() {
    return (
        <p>No se encontraron películas para esta búsqueda</p>
    )
}

function Movies({ movies }): any {
    const hasMovies = movies?.length > 0

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResults />
    )
}

function useSearch() {
    const [search, updateSearch] = useState('');
    const [error, setError] = useState(null);
    const isInputUsed = useRef(true);

    useEffect(() => {
        if (isInputUsed.current) {
            isInputUsed.current = search === ''
            return
        }
        if (search === '') {
            setError('Rellena el buscador');
            return
        }

        if (search.length < 3) {
            setError('La búsqueda necesita 3 caracteres');
            return
        }
        setError(null);
    }, [search])

    return { search, updateSearch, error }

}

export const SearchBar = () => {

    const { search, updateSearch, error } = useSearch();

    const { movies, getAllMovies } = allMovies({ search });


    const handleSubmit = (event: FormEvent): any => {
        event.preventDefault();
        getAllMovies({ search });

    }
    const handleChange = (event: FormEvent): any => {
        const newSearch = event.target.value
        updateSearch(newSearch);
    }


    return (
        <>
            <div className="bg-slate-700 px-10 py-5 w-full rounded-lg w-50">
                <form className="items-center" onSubmit={handleSubmit}>

                    <div className="flex w-100 items-center">
                        <div className="flex gap-2 rounded-md overflow-hidden w-full">
                            <Input value={search} onChange={handleChange} size='xl' type="text" label="Película" placeholder="Regreso al futuro, Pesadilla antes de navidad, Avatar..." />
                            <Button type="submit" className="h-100" color="primary">Buscar</Button>
                        </div>
                    </div>
                </form>
                {error && <p className='text-error'>{error}</p>}
            </div>

            <Divider className="my-2" />

            <main>
                Resultados
                <Divider className="my-2" />

                {<Movies movies={movies} />}

            </main>
        </>
    )
}

export default SearchBar;