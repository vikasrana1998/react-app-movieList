import React from 'react';

const MovieList = (props) => {

	return (
		<>
			{props.movies.map((movie) => (
				<div className='image-container'>
					<div>
						<h4>Title: {movie.Title}</h4>
						<h4>Year: {movie.Year}</h4>
						<h4>Type: {movie.Type}</h4>
					</div>
					<div>
						<img src={movie.Poster} alt='movie'></img>
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
