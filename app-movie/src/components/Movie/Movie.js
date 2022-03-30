
import style from "./Movie.module.css";

// Component Movie menerima props
function Movie(props) {
  // Melakukan destructing props
  const { movie } = props;

  return (
    <div className={style.movie}>
      <img
        className={style.movie__image}
        src={movie.poster}
        alt={movie.title}
      />
      <h3 className={style.movie__title}>{movie.title}</h3>
      <p className={style.movie__date}>{movie.year}</p>
    </div>
  );
}

export default Movie;