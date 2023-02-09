import  axios  from "axios";


const moviesApiInTheaters = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie'
});

export const moviesGenre = axios.create({
    baseURL: 'https://api.themoviedb.org/3/genre'
});

export default moviesApiInTheaters