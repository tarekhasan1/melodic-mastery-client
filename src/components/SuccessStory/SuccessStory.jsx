import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './SuccessStory.css'

const SuccessStory = () => {
  const successStories = [
    {
      id: 1,
      name: 'John Doe',
      instrument: 'Piano',
      story: 'I started taking piano lessons at the music school, and within a few months, I could play my favorite songs! The teachers are talented and patient, and the learning environment is friendly and encouraging. I\'m so grateful for the wonderful experience!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      instrument: 'Guitar',
      story: 'Joining the music school was the best decision I made. The guitar lessons are tailored to my skill level and interests. The instructors are knowledgeable and passionate, and they always push me to improve. I\'ve made incredible progress and can now confidently perform in front of an audience!',
    },
    {
      id: 3,
      name: 'Jane Smith',
      instrument: 'Guitar',
      story: 'Joining the music school was the best decision I made. The guitar lessons are tailored to my skill level and interests. The instructors are knowledgeable and passionate, and they always push me to improve. I\'ve made incredible progress and can now confidently perform in front of an audience!',
    },
    {
      id: 4,
      name: 'Jane Smith',
      instrument: 'Guitar',
      story: 'Joining the music school was the best decision I made. The guitar lessons are tailored to my skill level and interests. The instructors are knowledgeable and passionate, and they always push me to improve. I\'ve made incredible progress and can now confidently perform in front of an audience!',
    }
  ];

  return (
    <section className="success-stories">
      <h2>Success Stories</h2>
      <TransitionGroup className="success-story-container">
        {successStories.map((story) => (
          <CSSTransition key={story.id} timeout={500} classNames="fade">
            <div className="success-story">
              <h3>{story.name}</h3>
              <p>{story.instrument}</p>
              <p>{story.story}</p>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </section>
  );
};

export default SuccessStory;
