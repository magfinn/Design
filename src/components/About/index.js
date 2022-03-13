import React from 'react';
import portrait from '../../assets/App.test.png';
import { Container, Card } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <h1 id='about'>About Me</h1>
      <div>
        <img
          src={portrait}
          id="headshot"
          className='mb-5'
          alt="portrait"
        />
        <p>
          Mother of two, lover of outdoor adventures, and current student of UC Davis Coding Bootcamp.
        </p>
        <p>
          I have spent the last 10 years working for nonprofits serving homeless, low-income and at-risk populations in Sacramento and the Bay Area. In nonprofits, you often wear many hats. 5 years ago my attention turned to tech when I "inherited" a role as Salesforce Administrator. I spent the next year getting the system up and running and have continued working on and improving it ever since. I have experienced a disconnect that can take place in not-for-profit organizations between the technology that is available, and the time and expertise needed to utilize these tools to their full capacity. I am motivated to help bridge this gap for organizations making a difference in the community - providing the technical support they need to continue their hard and much needed work.
        </p>
      </div>
    </Container>
  );
};

export default About;
