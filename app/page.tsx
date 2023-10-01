"use client"
import { Navbar, Hero } from '../components';
import SearchBar from './movies/components/SearchBar';
import { MoviesGrid } from './movies';





export default function HomePage() {

  
  

  return (
    <>

      <Navbar />
      <Hero />
      <div className="mx-auto flex flex-col justify-start min-h-screen w-100 rounded-lg my-3">

        <div className='container mx-auto py-5 bg-background p-4'>

          <SearchBar />
          

        </div>
      </div>
    </>
  )
}