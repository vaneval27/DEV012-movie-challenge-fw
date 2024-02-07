import React from "react";

function MovieCard({movie}) {
    const URL_IMAGE= 'https://image.tmdb.org/t/p/original'

    // const getMovie = () => {
    //     fetch('https://api.themoviedb.org/3/discover/movie?api_key=84ebe95e82049e14d7681db34ef740d3')
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     //.catch(err => console.error(err));
    // }

    // useEffect(() => {
    //     getMovie()
    // },[])

    return (
        <div className="movieCard">
            <img src={`${URL_IMAGE + movie.poster_path}`} alt="" />
            <h2>{movie.title}</h2>
            <h3>Release date:</h3>
            <h4>{movie.release_date}</h4>
        </div>
    )
}

export default MovieCard