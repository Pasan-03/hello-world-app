import React from 'react';
import { useState } from 'react';

function App() {
  const [experts, setExperts] = useState([
    {
      name: 'Expert 1',
      image: './images/teacher1.jpg',
      description: 'Expert 1 Description',
    },
    {
      name: 'Expert 2',
      image: './images/teacher2.jpg',
      description: 'Expert 2 Description',
    },
    {
      name: 'Expert 3',
      image: './images/teacher3.jpg',
      description: 'Expert 3 Description',
    },
    {
      name: 'Expert 4',
      image: './images/teacher4.jpg',
      description: 'Expert 4 Description',
    },
  ]);

  const [testimonials, setTestimonials] = useState([
    {
      name: 'Testimonial 1',
      image: './images/student1.jpg',
      description: 'Testimonial 1 Description',
    },
    {
      name: 'Testimonial 2',
      image: './images/student2.jpg',
      description: 'Testimonial 2 Description',
    },
    {
      name: 'Testimonial 3',
      image: './images/student3.jpg',
      description: 'Testimonial 3 Description',
    },
    {
      name: 'Testimonial 4',
      image: './images/student4.jpg',
      description: 'Testimonial 4 Description',
    },
    {
      name: 'Testimonial 5',
      image: './images/student5.jpg',
      description: 'Testimonial 5 Description',
    },
    {
      name: 'Testimonial 6',
      image: './images/student6.jpg',
      description: 'Testimonial 6 Description',
    },
  ]);

  return (
    <div className="container">
      <header>
        <div className="logo">
          <h1>genZedu</h1>
          <p>WORK SMARTER NOT HARDER</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-image">
          {'./images/student6.jpg'}
          </div>
          <div className="hero-content">
            <h2>"EduFusion makes learning effortless, empowering students to achieve their best with confidence."</h2>
            <button>JOIN NOW</button>
          </div>
        </section>
        <section className="about">
          <div className="about-content">
            <p>At EduFusion, our vision is to empower educators with a collaborative and innovative learning environment that fosters student engagement, and fosters collaboration. We strive to inspire and guide our students, transforming the educational experience into one of innovation, efficiency, and resilience.</p>
          </div>
        </section>
        <section className="experts">
          <h2>Meet our Experts</h2>
          <div className="experts-grid">
            {experts.map((expert) => (
              <div key={expert.name} className="expert-card">
                <img src={expert.image} alt={expert.name} />
                <h3>{expert.name}</h3>
                <p>{expert.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="testimonials">
          <h2>"What Our Students Are Saying"</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="testimonial-card">
                <div className="testimonial-quote">
                  <p>{testimonial.description}</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <p>{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Video Library</a>
            </li>
            <li>
              <a href="#">Usage</a>
            </li>
            <li>
              <a href="#">Learning</a>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Organizational Development</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Experts</a>
            </li>
            <li>
              <a href="#">Design</a>
            </li>
            <li>
              <a href="#">Programming</a>
            </li>
            <li>
              <a href="#">Collaboration Science</a>
            </li>
            <li>
              <a href="#">Digital Innovation</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Occupations</a>
            </li>
            <li>
              <a href="#">Cost Analysis</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p>Copyright 2023 EduFusion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;