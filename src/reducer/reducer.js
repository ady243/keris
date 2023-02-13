import {ADD_LIKE, LOAD_INITIAL_MOVIES, ADD_DISLIKE, LOAD_INITIAL_CATEGORIES } from "../actions/actions";

const initialState = {
    movies: [],
    categories: []
}

export function movieReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LIKE:
            return {
                ...state,
                movies: state.movies.map(movie => {
                    if (movie.id === action.payload) {
                        return {
                            ...movie,
                            likes: movie.likes + 1
                        }
                    }
                    return movie
                })
            }
        case ADD_DISLIKE:
            return {
                ...state,
                movies: state.movies.map(movie => {
                    if (movie.id === action.payload) {
                        return {
                            ...movie,
                            dislikes: movie.dislikes + 1
                        }
                    }
                    return movie
                })
            }
        case LOAD_INITIAL_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state
    }
}

export function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_INITIAL_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}