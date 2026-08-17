import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Nazim was professional, responsive, and delivered exactly what I needed. The final result was clean and well organized.",
      name: "Client",
      role: "Web Design Project",
    },
    {
      quote:
        "Great communication and attention to detail. The project was completed on time and the quality was excellent.",
      name: "Client",
      role: "Graphic Design Project",
    },
    {
      quote:
        "Very easy to work with and always willing to make improvements. I would definitely recommend his services.",
      name: "Client",
      role: "Digital Services Project",
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">

        {/* HEADER */}

        <div className="testimonials-header">
          <span>CLIENT FEEDBACK</span>

          <h2>What Clients Say</h2>

          <div className="testimonials-line"></div>

          <p>
            Professional communication, reliable delivery, and
            attention to detail are at the center of every project.
          </p>
        </div>


        {/* TESTIMONIALS */}

        <div className="testimonials-grid">

          {testimonials.map((testimonial, index) => (
            <article
              className="testimonial-card"
              key={index}
            >

              <div className="quote-mark">
                “
              </div>

              <p className="testimonial-quote">
                {testimonial.quote}
              </p>

              <div className="testimonial-author">

                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3>{testimonial.name}</h3>

                  <span>{testimonial.role}</span>
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;