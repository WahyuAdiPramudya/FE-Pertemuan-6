import style from "./Movies.module.css";
import Movie from "../Movie/Movie.js";
import data from "../../utils/constants/data";
import { useState } from 'react';
import { nanoid } from 'nanoid';

function Movies() {
  // ubah variabel biasa ke variable state:movie
  // useState mengembalikan 2 data
  // - nilai saat ini
  const [movies, setMovies] = useState(data);
  
  function tambahFilm() {
    const movie = {
      id:nanoid(),
      title:"Spiral Jigsaw",
      year:"2021",
      type: "Film",
      poster:'https://picsum.photos/300/400'
    }

    // panggil fungsi setMovies untuk ubah data movies
    // ambil 12 movies + movie
    // spread operator : copy dan merge

    const newMovie = movies.concat(movie);
    setMovies(newMovie);
  }

  return (  
    <div>
      <div className={style.container}>
        <section className={style.movies}>
          <h2 className={style.movies__title}>Latest Movies</h2>
          <div className={style.movies__container}>
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
          <button onClick={tambahFilm}>Add Movie</button>
        </section>
      </div>
    </div>
  );
}

export default Movies;