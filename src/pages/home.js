import MovieCard from "../Components/MovieCard/MovieCard";
import { movies } from "./../constants";

import "./../App.css";

export default function Home() {
  return (
    <div className="App">
      <span className="title">Recommended Movies</span>
      <section className="movie-container">
        {movies.map((movie)=> <MovieCard key={movie.id} name={movie.name} href={movie.path} /> )}
      </section>
    </div>
  );
}
