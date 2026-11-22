import React from 'react';
import './MovieCard.css';

export default function MovieCard({ id, title, year, duration, genre, rating, poster, available, myRating, favorite, onRate, onFavorite }) {
  return (
    <article className="movie-card">
      <div className="movie-card__poster" style={{ background: poster }}><span>🎬</span><strong dir="ltr">{title}</strong></div>
      <div className="movie-card__body">
        <button className="heart" onClick={() => onFavorite(id)} aria-label="מועדפים" aria-pressed={favorite}>{favorite ? '♥' : '♡'}</button>
        <h3 dir="ltr">{title}</h3>
        <p>{year} · {duration} דקות</p>
        <p>{genre} · ⭐ {rating}</p>
        <div className="rating">הדירוג שלי: <span dir="ltr">{[1, 2, 3, 4, 5].map(star => <button key={star} onClick={() => onRate(id, star)} aria-label={`דירוג ${star}`} aria-pressed={star <= myRating}>{star <= myRating ? '★' : '☆'}</button>)}</span></div>
        <p className={available ? 'available' : 'unavailable'}>{available ? 'זמין לצפייה' : 'לא זמין לצפייה'}</p>
      </div>
    </article>
  );
}
