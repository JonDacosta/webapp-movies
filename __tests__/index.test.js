import { fireEvent, render, screen } from '@testing-library/react'
import HomePage from '../app/page'
// import MoviePage from '../app/movie/[id]/page';
// import SearchBar from '../app/movies/components/SearchBar'
import '@testing-library/jest-dom'
 
describe('HomePage', () => {
  it('Debe renderizar Enlace Popular en el Navbar', () => {

    const { getByText } = render(<HomePage />);
    const Popular = getByText('Popular');
    expect(Popular).toBeInTheDocument();
  })
  it('Debe renderizar Enlace Favoritas en el Navbar', () => {

    const { getByText } = render(<HomePage />);
    const Favoritas = getByText('Favoritas');
    expect(Favoritas).toBeInTheDocument();
  })
  // it('Debe comprobar el botón del buscador de películas', () => {
    
  //   render(<SearchBar />);
  //   screen.debug()
  //   fireEvent.click( screen.getByText("Buscar")); 
  // })
  
})