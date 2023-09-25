import Banner from "../Banner/Banner";
import FeaturedJobs from "../JobCategoryList/FeaturedJobs/FeaturedJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h3>Welcome to home</h3>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;