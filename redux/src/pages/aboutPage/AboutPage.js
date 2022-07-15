
import { useSelector } from "react-redux";

function AboutPage () {

    const title= useSelector(state => state.title)

    

    return (
        <div>
            aboutPage - {title}

            </div>
    );
};

export default AboutPage;

