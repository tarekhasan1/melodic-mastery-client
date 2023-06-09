import Instructors from "../Instructors/Instructors";
import Slider from "../Slider/Slider";
import SuccessStory from "../SuccessStory/SuccessStory";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Instructors></Instructors>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;