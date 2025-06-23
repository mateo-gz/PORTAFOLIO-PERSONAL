import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">📬 Contacto</h2>
      <form
        className="contact-form"
        action="https://formspree.io/f/{tu_id_aquí}" // o reemplazalo con tu backend
        method="POST"
      >
        <input type="text" name="name" placeholder="Tu nombre" required />
        <input type="email" name="email" placeholder="Tu correo" required />
        <textarea name="message" rows="5" placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
