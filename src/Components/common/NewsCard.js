import React from 'react';
import { Link } from 'react-router-dom';

function NewsCard({
  item,
  variant = 'latest',
  to,
  featured = false,
  showSummary = true,
  showAuthor = false,
}) {
  const target = item.path || to || '/';

  if (variant === 'latest') {
    return (
      <Link
        className={featured ? 'latest-card latest-card--featured' : 'latest-card'}
        to={target}
      >
        <div className="latest-card__image">
          <img src={item.image} alt={item.alt || item.title} />
          <span>{item.category}</span>
        </div>
        <div className="latest-card__body">
          <h3>{item.title}</h3>
          {showSummary && item.summary && <p>{item.summary}</p>}
          {item.time && <small>{item.time}</small>}
        </div>
      </Link>
    );
  }

  if (variant === 'related') {
    return (
      <Link className="related-card" to={target}>
        <img src={item.image} alt={item.alt || item.title} />
        <span>{item.category}</span>
        <h3>{item.title}</h3>
      </Link>
    );
  }

  return (
    <Link className="economy-news-card" to={target}>
      <img src={item.image} alt={item.alt || item.title} />
      <span>{item.category}</span>
      <h3>{item.title}</h3>
      {showSummary && item.summary && <p>{item.summary}</p>}
      {(showAuthor || item.time) && (
        <small>
          {showAuthor && item.author ? `${item.author} · ` : ''}
          {item.time}
        </small>
      )}
    </Link>
  );
}

export default NewsCard;
