import { useState } from "react";
import { AllMovies } from "../movies/interfaces/all-movies";
import { searchMovies } from "../services/movies";


interface Props {
    params: { search: string }
}

export function allMovies({ search }):any {
    const [movies, setMovies] = useState([])


    const getAllMovies = async () => {
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
        
    }
    return { movies, getAllMovies }
}