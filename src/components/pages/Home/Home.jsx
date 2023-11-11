import { Helmet } from "react-helmet-async";
import PopularItems from "../../PopularItems/PopularItems";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured/Featured";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>

      <Category></Category>

      <PopularItems></PopularItems>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
