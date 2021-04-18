import {apiCall, apiKey} from './index';


export const getTrendingMovies = async (movieType) => {
    const formatMovieType = movieType.toString().replace('-', '_')
    return await apiCall.get(`${
        movieType === 'trending' ? 'trending/all/day' : `movie/${formatMovieType}`
    }?api_key=${apiKey}${
        movieType === 'trending' ? '' : '&language=en-US&page=1'
    }`)
}

export const getMovieDetails = async (movieId) => {
    return await apiCall.get(`movie/${movieId}?api_key=${apiKey}&language=en-US
        `);

}

export const getMovieDetailsSimilar = async (movieId) => {
    return await apiCall.get(`movie/${movieId}/similar?api_key=${apiKey}&language=en-US
        `);
}
