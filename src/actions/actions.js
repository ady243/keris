import {moviesPromise} from "../data/movies";

export const ADD_LIKE = 'ADD_LIKE';

export const ADD_DISLIKE = 'ADD_DISLIKE';

export const LOAD_INITIAL_MOVIES = 'LOAD_INITIAL_MOVIES';

export const LOAD_INITIAL_CATEGORIES = 'LOAD_INITIAL_CATEGORIES';

export const addLike = (id) => ({
    type: ADD_LIKE,
    payload: id
});

export const addDislike = (id) => ({
    type: ADD_DISLIKE,
    payload: id
});

export function loadInitialMovies () {
    return async (dispatch) => {
        const movies = await moviesPromise;
        dispatch({
            type: LOAD_INITIAL_MOVIES,
            payload: movies
        })
    }
}

export function loadInitialCategories () {
    return async (dispatch) => {
        const movies = await moviesPromise;
        const categories = movies.map(movie => movie.category);
        const uniqueCategories = [...new Set(categories)];
        dispatch({
            type: LOAD_INITIAL_CATEGORIES,
            payload: uniqueCategories
        })
    }
}