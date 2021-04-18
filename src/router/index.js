import {createRouter, createWebHistory} from 'vue-router'

import Home from '../pages/home'
import MovieId from '../pages/movieId'


const routes = [
    {
        path: '/:movie_type',
        name: "Home",
        component: Home
    }, {
        path: '/:movie_type/:movie_id',
        name: "MovieType",
        component: MovieId
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router
