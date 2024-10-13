import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='54d5d49f7a5c0ab9cec67d2f4655b543'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=54d5d49f7a5c0ab9cec67d2f4655b543';

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}