import MovieListItem from "./MovieListItem";

const MovieList = ({ movies }) => {
    return (
        <div className="row">
            {movies.map((movie) => (
                <MovieListItem key={movie.id} movie={movie}/>
            ))}
        </div>
    )
}

export default MovieList;