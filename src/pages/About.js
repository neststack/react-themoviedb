import React from 'react';

const About = () => {
  return (
    <section className='section about-section'>
      <h1 className='section-title'>about</h1>
      <p>Used themoviedb API to fetch movies and their details</p>
      <h3>Queries used:</h3>
      <p>{`Popular movies, Search by keywords, Search by id & Similar movies`}</p>
    </section>
  );
};

export default About;
