import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <div>
      <Carousel className="text-center">
        <div>
          <img className="rounded-md" src={img1} />
        </div>
        <div>
          <img className="rounded-md" src={img2} />
        </div>
        <div>
          <img className="rounded-md" src={img3} />
        </div>
        <div>
          <img className="rounded-md" src={img4} />
        </div>
        <div>
          <img className="rounded-md" src={img5} />
        </div>
        <div>
          <img className="rounded-md" src={img6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
