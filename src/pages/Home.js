import React from 'react'

import Hero from '../components/Hero/Hero';
import Person from '../images/female-on-computer.jpg';

const Home = () => {

  const applyNow = () => {
    console.log('Apply Now')
  };

  const findACampus = () => {
    console.log('Find a campus');
  };

  return (
    <div>
      <Hero
      imageUrl={Person}
      title="web development course" 
      description="In 9 intensive weeks, learn all the skills of a Software Developer, code your own web applications from scratch and change your career."
      action1={applyNow}
      titleButton1="apply now"
      action2={findACampus}
      titleButton2="find a campus"
      />
    </div>
  );
}

export default Home;