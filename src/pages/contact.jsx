import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://formspree.io/f/mgvynnwz', { // <-- pon tu ID real aquí
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormData({ name: '', email: '', message: '' });
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">📬 Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Tu mensaje"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>

      {status === 'success' && <p style={{ color: 'green' }}>Mensaje enviado correctamente ✅</p>}
      {status === 'error' && <p style={{ color: 'red' }}>Hubo un error 😕, intenta más tarde.</p>}
    </section>
  );
};

export default Contact;
