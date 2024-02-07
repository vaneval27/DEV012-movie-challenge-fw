import MovieCard from "./MovieCard";

const MovieList = ({movies}) => {
    return (
        <div className="movieList">
            {movies.map(movie => (
                // <Component/> sintaxis de JSX en React que permite escribir algo similar a HTML
                //dentro de componets de React
                <MovieCard key={movie.id} movie={movie}/>
                //key se usa en React para identificar cada elemento en una lista renderizada
            ))}
        </div>
    )
}

export default MovieList