import coverImage from '../../assets/backgrounds/IMG_1797.JPG';
import React from 'react';

const AboutUs = () => {
  return (
    <section className='my-5'>
      <h1 id='about'>About Me</h1>
      <img
        src={coverImage}
        className='my-6'
        style={{ width: '50%' }}
        alt='cover'
      />
      <p>
        Mother of two, lover of outdoor adventures, and current student of UC Davis Coding Bootcamp. I have spent the last 10 years working for nonprofits serving homeless, low-income and at-risk populations in Sacramento and the Bay Area. In nonprofits, you often wear many hats. 5 years ago my attention turned to tech when I "inherited" a role as Salesforce Administrator. I spent the next year getting the system up and running and have continued working on and improving it ever since. I have experienced a disconnect that can take place in not-for-profit organizations between the technology that is available, and the time and expertise needed to utilize these tools to their full capacity. I am motivated to help bridge this gap for organizations making a difference in the community - providing the technical support they need to continue their hard and much needed work.
      </p>
    </section>
  );
};

export default AboutUs;
