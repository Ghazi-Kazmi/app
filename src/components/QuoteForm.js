import React from 'react';

function QuoteForm() {
  return (
    <section className="quote-form" id="rapid-quote">
      <h2>Get a Rapid Quote</h2>
      <form action="/submit-quote" method="post" encType="multipart/form-data">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Contact:</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="project-details">Project Details:</label>
        <textarea id="project-details" name="project-details" rows="4" required></textarea>

        <label htmlFor="file-upload">Upload File:</label>
        <input type="file" id="file-upload" name="file-upload" required />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
export default QuoteForm;