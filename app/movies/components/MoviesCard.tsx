'use client'
import Link from "next/link"
import { SimpleMovie } from "../interfaces/simple-movies";
import { Image, Badge } from "@nextui-org/react";


interface Props {
    movie: SimpleMovie;
}


export const MoviesCard = ({ movie }: Props) => {

    const { id, title, poster_path, vote_average } = movie;

    return (
        <div className="mx-auto right-0 mt-2 w-100">
            <div className="bg-filmscard rounded-lg shadow-lg min-h-full">
                <Badge className={`badge ${vote_average > 5 ? 'green-border' : 'red-border'}`} content={vote_average.toFixed(1)} >

                    <Image
                        key={id}
                        isZoomed
                        width={350}
                        // height={ 800 }
                        alt={title}
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}

                    />
                </Badge>
                <div className="flex flex-col items-center justify-center text-center p-0 bg-gray-800 ">

                    <p className="pt-3 m-4 h-7 text-lg font-semibold text-white capitalize break-words max-w-xs">{title}</p>
                    <p className="text-sm text-gray-100"></p>
                    <div className="my-4 p-3 justify-start">
                        <Link
                            href={`/movie/${id}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Más información
                        </Link>

                    </div>
                </div>
                {/* <div className="">
                    <Link className="px-2 py-3 hover:bg-gray-100 flex" href="/main" >
                            <div className="text-red-600">
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    No es favorita
                                </p>
                            </div>
                    </Link>
                    
                </div> */}

            </div>
        </div>
    )
}
