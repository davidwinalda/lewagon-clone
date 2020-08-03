import React from 'react'

import Hero from '../components/Hero/Hero';
import Person from '../images/person-on-computer.jpg';

const DataScience = () => {

  const getStarted = () => {
    console.log('Get started')
  };

  const explore = () => {
    console.log('Explore');
  };

  return (
    <Hero
    imageUrl={Person}
    title="data science course" 
    description="In 9 intensive weeks, learn all the skills of a Software Developer, code your own web applications from scratch and change your career."
    action1={getStarted}
    titleButton1="get started"
    action2={explore}
    titleButton2="explore course"
    />
  );
}

export default DataScience;