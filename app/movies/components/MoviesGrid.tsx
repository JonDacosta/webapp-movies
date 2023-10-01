import { SimpleMovie } from '../interfaces/simple-movies';
import style from '../PopularMovies.module.css';
import { MoviesCard } from './MoviesCard';

interface Props {
    movies: SimpleMovie[];
}

export const MoviesGrid = ({ movies }:Props) => {
  return (
    <div className={ style.moviesBox }>
        {
            movies.map( movie => (
                <MoviesCard key={ movie.id } movie={ movie }/>
            ))
        }        
    </div>
  )
}
