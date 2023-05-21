
import useTitle from "../../hook/useTitle";
import Animation from "./Animation";
import Banner from "./Banner";
import Category from "./Category";
import Extra from "./Extra";
import Gallery from "./Gallery";


const HomePage = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Animation></Animation>
            <Gallery></Gallery>
            <Category></Category>
            
            <Extra></Extra>
        </div>
    );
};

export default HomePage;