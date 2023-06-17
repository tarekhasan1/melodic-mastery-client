import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SuccessStory.css";

const SuccessStory = () => {
  const successStories = [
    {
      id: 1,
      name: "John Doe",
      image: "https://www.pngitem.com/pimgs/m/106-1068071_black-person-png-black-man-business-png-transparent.png",
      instrument: "Piano",
      story:
        "I started taking piano lessons at the music school, and within a few months, I could play my favorite songs! The teachers are talented and patient, and the learning environment is friendly and encouraging. I'm so grateful for the wonderful experience!",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://media.istockphoto.com/id/183279907/photo/happy-young-man-gives-thumbs-up.jpg?s=612x612&w=0&k=20&c=gryk-BqPIms6eZFMApuOZRMfwIvWssdPujTgz3ryq9I=",
      instrument: "Guitar",
      story:
        "Joining the music school was the best decision I made. The guitar lessons are tailored to my skill level and interests. The instructors are knowledgeable and passionate, and they always push me to improve. I've made incredible progress and can now confidently perform in front of an audience!",
    },
    {
      id: 3,
      name: "Michael Johnson",
      image: "https://www.pngitem.com/pimgs/m/513-5137780_businessman-png-transparent-png.png",
      instrument: "Drums",
      story:
        "Learning to play the drums at the music school has been a game-changer for me. The instructors are phenomenal and the practice facilities are top-notch. Thanks to their guidance and support, I can now keep the rhythm and play with confidence. It's been an amazing journey!",
    },
    {
      id: 4,
      name: "Emily Davis",
      image: "https://www.kindpng.com/picc/m/160-1600378_transparent-happy-person-png-happy-man-face-png.png",
      instrument: "Violin",
      story:
        "Studying violin at the music school has been an incredible experience. The teachers are highly skilled and dedicated to helping students reach their full potential. I've learned proper technique and musical expression, and I've had opportunities to perform in recitals. It's been a challenging and rewarding journey!",
    },
    {
      id: 5,
      name: "David Rodriguez",
      image: "https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
      instrument: "Saxophone",
      story:
        "The music school has been instrumental in my saxophone journey. The instructors are passionate about jazz and classical music, and they have helped me develop my improvisation skills and refine my tone. The supportive community and regular performances have boosted my confidence. I'm grateful for this incredible opportunity!",
    },
    {
      id: 6,
      name: "Sophia Chen",
      image: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F5fd1963a-af65-11ec-8b8c-0207c0fd6104.png?crop=1500%2C1000%2C0%2C0",
      instrument: "Vocal",
      story:
        "Enrolling in vocal lessons at the music school has transformed my singing abilities. The vocal coaches are highly experienced and have taught me proper breathing techniques, vocal control, and stage presence. I've gained confidence in my voice and have even started performing solo. It's been an amazing journey!",
    },
  ];

  useEffect(() => {
    AOS.init({duration: 1000}); // Initialize AOS
  }, []);

  return (
    <section
      className="success-stories"
      style={{
        backgroundImage:
          "url('https://www.seekpng.com/png/full/821-8215450_music-note-background-musical-note.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-center text-white mt-5">Success Stories</h2>
      <p className="text-center text-white mb-5">
        Some of our successful students saying about our Summer school.
      </p>
      <div className="success-story-container">
        {successStories.map((story) => (
          <div
            key={story.id}
            className="success-story"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div className="profile-image">
              <img src={story.image} alt={story.name} />
            </div>
            <h3>{story.name}</h3>
            <p>{story.instrument}</p>
            <p>{story.story}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStory;
