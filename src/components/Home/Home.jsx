import useTitle from "../../hooks/useTitle";
import Classes from "../Classes/Classes";
import ContactForm from "../ContactForm/ContactForm";
import Instructors from "../Instructors/Instructors";
import Slider from "../Slider/Slider";
import SuccessStory from "../SuccessStory/SuccessStory";

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Slider></Slider>
            <Classes></Classes>
            <Instructors></Instructors>
            <SuccessStory></SuccessStory>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;