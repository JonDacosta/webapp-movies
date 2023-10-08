
import { Metadata } from 'next';
import { Movie } from '../../movies/interfaces/movie';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../../components';
import { notFound } from 'next/navigation';
import { options } from '../../services/api'

interface Props {
    params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    try {
        const { original_title } = await getMovieInfo(params.id);

        return {
            title: `#${original_title}`,
            description: `Página de la película ${original_title}`
        }

    } catch (error) {
        return {
            title: 'Página de la pelicula',
            description: 'Lorem'
        }

    }

}

const getMovieInfo = async (id: string): Promise<Movie> => {
    try {
        const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, options)
            .then(res => res.json());

        console.log(movie);
        return movie;
    } catch {
        notFound();
    }

}



export default async function MoviePage({ params }: Props) {

    const movie = await getMovieInfo(params.id)

    return (
        <>
            <Navbar />
            <div className='p-5 flex md:flex-row flex-col w-100 h-auto justify-center gap-6'>
                <div className='flex justify-center'>
                    <Image
                        key={movie.id}
                        width={500}
                        height={150}
                        alt={movie.title}
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        priority={false}
                        className='rounded-lg shadow-lg'
                    />
                </div>
                <div className="flex flex-col justify-center items-center bg-filmcard">

                    <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                        <div className="mt-2 mb-8 w-full">
                            <h4 className="px-2 mb-5 text-4xl font-bold text-navy-700 dark:text-white" data-testid="test-title">
                                {movie.original_title}


                            </h4>
                            <p className="mt-2 px-2 text-base text-gray-600">
                                {movie.overview}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 px-2 w-full">
                            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p className="text-sm text-gray-600">Site: </p>
                                <p className="text-base font-medium text-navy-700 dark:text-white">
                                    <Link href={movie.homepage}>
                                        {movie.homepage ? movie.homepage : '❌ No disponible'}
                                    </Link>
                                </p>

                            </div>

                            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p className="text-sm text-gray-600">Idioma original:</p>
                                <p className="text-base font-medium text-navy-700 dark:text-white">
                                    {movie.original_language}
                                </p>
                            </div>


                            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p className="text-sm text-gray-600">Puntuación {`${Math.floor(movie.vote_average) > 5 ? '👍🏽' : '👎🏽'} `}</p>
                                <p className="text-base font-medium text-green-700 dark:text-white">
                                    {Math.floor(movie.vote_average)}

                                </p>
                            </div>

                            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p className="text-sm text-gray-600">Fecha de salida:</p>
                                <p className="text-base font-medium text-navy-700 dark:text-white">
                                    {movie.release_date}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}




