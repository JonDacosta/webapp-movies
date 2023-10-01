import { Navbar } from "../../../components";
import { MoviesGrid } from "../../movies";


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTBjOWYyMzI0M2M5NTkxNjVmZDk3NTNkOGRmZjUzZSIsInN1YiI6IjY1MTRhNzNjYmRkNTY4MDBlNDZiNjhjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AxOgaOfeonCf3a4GT1ahG0LLFReyM9HMF8namSMD74k'
  }
};

export const metadata = {
  title: 'Mi lista de favoritos',
  description: 'Guarda aquí las películas que más te han gustado'
}



export default async function MoviesPage() {



  return (
    <>
        <div className="flex flex-col m-1 container mx-auto p-4 w-100">
          <span className="text-3xl font-bold my-5 bg-filmcard py-2 text-center">Películas Favoritas</span>

          <div className="p-5 pt-0">
            <MoviesGrid movies={[]} />
          </div>
        </div>
    </>
  )
}
