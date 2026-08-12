import React from 'react';
import { Link } from 'react-router-dom';

function SiteFooter({
  className,
  title = 'Nabız',
  tagline = 'Haberin Nabzı',
  description,
  links = [],
  copyright,
}) {
  return (
    <footer className={className}>
      <div>
        <h2>{title}</h2>
        {tagline && <span className="site-footer-tagline">{tagline}</span>}
        {description && <p>{description}</p>}
      </div>
      {links.length > 0 && (
        <nav>
          {links.map((link) => (
            <Link to={link.to || '/'} key={link.label}>{link.label}</Link>
          ))}
        </nav>
      )}
      {copyright && <p>{copyright}</p>}
    </footer>
  );
}

export default SiteFooter;
