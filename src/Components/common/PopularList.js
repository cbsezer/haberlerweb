import React from 'react';
import { Link } from 'react-router-dom';

function PopularList({
  title = 'En Çok Okunanlar',
  items,
  className = 'most-read',
  itemClassName = 'most-read__item',
  to = '/',
  metaKey = 'category',
}) {
  return (
    <section className={className}>
      <h2>{title}</h2>
      {items.map((item, index) => (
        <Link className={itemClassName} to={item.path || to} key={item.title}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3>{item.title}</h3>
            {item[metaKey] && <small>{item[metaKey]}</small>}
          </div>
        </Link>
      ))}
    </section>
  );
}

export default PopularList;
