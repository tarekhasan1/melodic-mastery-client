import { useEffect, useState } from 'react';
import './Slider.css'

const Slider = () => {
    const [backgroundClass, setBackgroundClass] = useState('background-1');

    useEffect(() => {
      const interval = setInterval(() => {
        setBackgroundClass((prevClass) => {
          if (prevClass === 'banner-1') {
            return 'banner-2';
          } else if (prevClass === 'banner-2') {
            return 'banner-3';
          } else {
            return 'banner-1';
          }
        });
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div className='height-control w-100 p-0 m-0'>
    <div className={backgroundClass} loading="lazy">
      <div className="overlay">
      <div className="banner-content">
        <div className="content-wrapper">
        <h1>Welcome to Melodic Mastery!</h1>
        <p>Discover the Joy of Music! <br /> Join our Instrumental Summer School <span className='text-success'>Melodic Mastery</span> <br /> and unleash your musical talent through expert guidance <br /> and immersive hands-on experiences.</p>
        <button className="btn mt-3 p-3 me-3">Our Instructors</button>
        <button className="btn mt-3 p-3">Our Classes</button>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Slider;

