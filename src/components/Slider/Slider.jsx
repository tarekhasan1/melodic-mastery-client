import { Carousel } from 'react-bootstrap';
import './Slider.css'

const Slider = () => {
  const sliderImages = [
    {
      image: 'https://www.usdan.org/sites/default/files/styles/hero_image/public/header/music.jpg?itok=Sd18DmIt',
      text: 'Image 1 Description'
    },
    {
      image: 'https://summer.esm.rochester.edu/wp-content/uploads/2018/10/Adventure-Music-Camp-2018-e1540393673201.jpg',
      text: 'Image 2 Description'
    },
    {
      image: 'https://www.depts.ttu.edu/music/ttuboc/Images/2020_images/TTUBOC18-Monday-40.jpg',
      text: 'Image 3 Description'
    }
  ];

  return (
    <div className="s-container container-fluid m-0 p-0">
      <Carousel interval={2000}>
        {sliderImages.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item.image}
              alt={`Slider Image ${index}`}
            />
            <Carousel.Caption>
              <h3>{item.text}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="s-info text-white w-50 py-2 music-summer-school-details">
      <h1>Melodic Mastery - Summer Music Learning School</h1>
        <h2>Learn and Play Music This Summer</h2>
        <p>
          Join our Music Instrument Summer School and embark on an exciting journey of learning and playing music. Whether you are a beginner or an experienced musician, our program offers a wide range of courses and workshops tailored to suit your skill level and interests.
        </p>
        <p>
          From instrument lessons to ensemble performances, our expert instructors will guide you through various musical styles and techniques. Explore the joy of music, meet fellow musicians, and create unforgettable memories during this enriching summer experience.
        </p>
        <p>
          Do not miss out on this incredible opportunity to enhance your musical skills and have a blast this summer. Enroll today and let the melodies fill your soul!
        </p>
      </div>
    </div>
  );
};

export default Slider;
