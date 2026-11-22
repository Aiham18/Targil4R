import React from 'react';
import MovieCard from './MovieCard.jsx';
import './MovieList.css';

export default function MovieList({ title, movies, ratings, favorites, rateMovie, toggleFavorite }) {
  return (
    <section className="movie-list">
      <h2 className="movie-list__title">{title}</h2>
      {movies.length === 0 && <p className="movie-list__empty">לא נמצאו סרטים</p>}
      <div className="movie-list__grid">
        {movies.map(movie => <MovieCard key={movie.id} {...movie} myRating={ratings[movie.id] || 0} favorite={!!favorites[movie.id]} onRate={rateMovie} onFavorite={toggleFavorite} />)}
      </div>
    </section>
  );
}
