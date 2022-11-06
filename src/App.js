import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Heading from './components/Heading';
import SearchBox from './components/SearchBox';

const App = () => {
	const [movies, setMovies] = useState([
		{
			"Title": "Avatar",
			"Year": "2009",
			"imdbID": "tt0499549",
			"Type": "movie",
			"Poster": "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_SX300.jpg"
		},
		{
			"Title": "Avengers: Infinity War",
			"Year": "2018",
			"imdbID": "tt4154756",
			"Type": "movie",
			"Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
		},
		{
			"Title": "Jurassic World",
			"Year": "2015",
			"imdbID": "tt0369610",
			"Type": "movie",
			"Poster": "https://m.media-amazon.com/images/M/MV5BNzQ3OTY4NjAtNzM5OS00N2ZhLWJlOWUtYzYwZjNmOWRiMzcyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
		},
		{
			"Title": "The StarWars Adventures: Project Blackwing",
			"Year": "2016–",
			"imdbID": "tt5814452",
			"Type": "series",
			"Poster": "https://m.media-amazon.com/images/M/MV5BMmQyM2M3ZjItYjhiMy00YWM4LWFmZGMtNTI1NTYwYjZlOGJhXkEyXkFqcGdeQXVyMzM4MTY3ODg@._V1_SX300.jpg"
		},
		{
			"Title": "Titanic",
			"Year": "1997",
			"imdbID": "tt0120338",
			"Type": "movie",
			"Poster": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
		}
	]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);


	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
				<Heading heading='VR Movie List App' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList
					movies={movies}
				/>
			</div>
		</div>
	);
};

export default App;
