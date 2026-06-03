import React from 'react';
import { Link } from 'react-router-dom';

function SectionHeading({ title, linkText, linkTo, actions }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {linkText && linkTo && <Link to={linkTo}>{linkText}</Link>}
      {actions}
    </div>
  );
}

export default SectionHeading;
