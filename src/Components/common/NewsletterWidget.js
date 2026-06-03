import React from 'react';

function NewsletterWidget({
  title = 'Haber Bülteni',
  description = 'En önemli haberleri her sabah e-posta adresinize gönderiyoruz.',
  placeholder = 'E-posta adresiniz',
  buttonText = 'Kayıt Ol',
}) {
  return (
    <section className="newsletter-widget">
      <h2>{title}</h2>
      <p>{description}</p>
      <input type="email" placeholder={placeholder} aria-label={placeholder} />
      <button type="button">{buttonText}</button>
    </section>
  );
}

export default NewsletterWidget;
