import {getTrendingMovies, getMovieDetails, getMovieDetailsSimilar} from '../../apis/getMovies'


const state = {
    movies: [],
    movieDetails: [],
    movieSimilar: []
};

const getters = {
    allMovies: state => state.movies,
    singleMovie: state => state.movieDetails,
    singleMovieSimilar: state => state.movieSimilar
};

const actions = {
    async fetchAllmovies({
        commit
    }, movieType) {
        const response = await getTrendingMovies(movieType)
        commit('mapMovies', response ?. data ?. results);
    },
    async fetchMovieDetails({
        commit
    }, movieId) {
        const response = await getMovieDetails(movieId)
        commit('mapMovieDetail', response ?. data);

    },
    async fetchMovieDetailsSimilar({
        commit
    }, movieId) {
        const response = await getMovieDetailsSimilar(movieId)
        commit('mapMovieDetailSimilar', response ?. data ?. results);

    }


};

const mutations = {
    mapMovies: (state, movies) => (state.movies = movies),
    mapMovieDetail: (state, movieDetails) => (state.movieDetails = movieDetails),
    mapMovieDetailSimilar: (state, similarMovies) => (state.movieSimilar = similarMovies)
};


export default {state, getters, actions, mutations};
