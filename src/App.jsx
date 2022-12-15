import { useState, useEffect, useCallback } from 'react'
import { get } from "./services"
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const movies = await get('movies');
    setMovies(movies);
    console.log(movies)
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <h1 style={{ color:'red', backgroundColor: 'black' }}>Movie List</h1>
      <table class="table" align='left' className="table table-striped" style={{ backgroundColor:'black' }}>
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Director</th>
            <th scope="col">Genre</th>
            <th scope="col">Plot</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie,index) => (
            <tr key={index}>
              <th scope="row">{movie.id}</th>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>{movie.genre}</td>
              <td>{movie.plot}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}


export default App