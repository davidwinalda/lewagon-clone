import React from 'react'

import './hero.css';
import Button from '../Button/Button';

const Hero = ({ imageUrl, title, description, action1, action2, titleButton1, titleButton2 }) => {
  return (
    <div className="wrapper-section-one">
      <div className="hero-section">
        <div className="hero-section-left">
          <div><h2>{title}</h2></div>
          <div>
            <p>
              {description}
            </p>
          </div>
          <div className="wrapperButton">
            <div className="actionButton">
              <Button 
                text={titleButton1}
                primary
                type="button"
                onClick={action1}
              />
            </div>
            <div className="actionButton">
              <Button 
                text={titleButton2}
                secondary
                type="button"
                onClick={action2}
              />
            </div>
          </div>
        </div>
        <div className="hero-section-right"><img src={imageUrl} alt="Person-On-Computer" /></div>
      </div>
    </div>
  );
}

export default Hero;