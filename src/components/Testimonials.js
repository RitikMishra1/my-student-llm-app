import React from 'react';
import { ContentBox, TestimonialContainer } from './StyledComponents'; // example styled components

const testimonialsData = [
  {
    quote: "Stella's AI solutions have transformed our business operations.",
    name: "- Name 1, Company 1"
  },
  {
    quote: "Innovative and indispensable. Stella's plugins are a game-changer for our industry.",
    name: "- Name 2, Company 2"
  }
];

const Testimonials = () => (
  <ContentBox>
    <h2>What Entrepreneurs Say About Stella</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {testimonialsData.map((testimonial, index) => (
        <TestimonialContainer key={index}>
          <p>{testimonial.quote}</p>
          <p><strong>{testimonial.name}</strong></p>
        </TestimonialContainer>
      ))}
    </div>
  </ContentBox>
);

export default Testimonials;