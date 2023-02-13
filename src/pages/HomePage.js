import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import { loadInitialCategories, loadInitialMovies } from "../actions/actions";
import MovieList from "../components/MovieList";
const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);
  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(loadInitialMovies());
    dispatch(loadInitialCategories());
  }, [dispatch]);

  const [page, setPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(6);
  const maxMoviesPerPage = movies.length;
  const minMoviesPerPage = 1;
  const [totalPages, setTotalPages] = useState(0);

  const indexOfLastMovie = page * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  const [currentMovies, setCurrentMovies] = useState(
    movies.slice(indexOfFirstMovie, indexOfLastMovie)
  );

  useEffect(() => {
    setTotalPages(Math.ceil(movies.length / moviesPerPage));
    setCurrentMovies(movies.slice(indexOfFirstMovie, indexOfLastMovie));
  }, [movies, page, moviesPerPage]);

  const paginate = (pageNumber) => setPage(pageNumber);

  const handleChooseCategory = (category) => {
    console.log(category);
    if (category === "Tous") {
      setCurrentMovies(movies);
    } else {
      const filteredMovies = movies.filter(
        (movie) => movie.category === category
      );
      setCurrentMovies(filteredMovies);
    }
  };

  const handleMoviesPerPage = (value) => {
    switch (value) {
      case "":
        value = 1;
        break;
      case "0":
        value = 1;
        break;
      default:
        value = parseInt(value);
    }

    if (value < minMoviesPerPage) {
      value = minMoviesPerPage;
    }

    if (value > maxMoviesPerPage) {
      value = maxMoviesPerPage;
    }

    setMoviesPerPage(value);
    setPage(1);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center">FILMS</h1>

          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleChooseCategory("Tous")}
                  >
                    Tous
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleChooseCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6 col-sm-4 col-md-2 my-4">
              <input
                type="number"
                className="form-control"
                placeholder="Nombre de films par page"
                onChange={(e) => handleMoviesPerPage(e.target.value)}
                value={moviesPerPage}
                min={minMoviesPerPage}
                max={maxMoviesPerPage}
              />
            </div>
          </div>

          <MovieList movies={currentMovies} />

          <div className="row mt-4">
            <div className="col-12 d-flex justify-content-center">
              <Pagination
                page={page}
                totalPages={totalPages}
                setPage={paginate}
                currentPage={page}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
