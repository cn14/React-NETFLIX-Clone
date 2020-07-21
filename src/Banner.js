import React, { useState, useEffect } from 'react';
import requests from './requests';
import instance from './axios';
import './Banner.css';

const base_url = 'https://image.tmdb.org/t/p/original';
const Banner = () => {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const res = await instance.get(requests.fetchNetflixOriginals);
			setMovie(
				res.data.results[
					Math.floor(Math.random() * res.data.results.length - 1)
				]
			);
		};
		fetchData();
	}, []);
	console.log(movie);

	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + '... ' : str;
	};
	return (
		<header
			className="banner"
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
				backgroundPosition: 'center center',
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{truncate(movie?.overview, 150)}
				</h1>
			</div>
			<div className="fade__banner"></div>
		</header>
	);
};

export default Banner;
