import SectionTittle from "../../../shared/SectionTittle/SectionTittle";
import featuredImg from "../../../../assets/home/featured.jpg";
import "./featured.css";
const Featured = () => {
  return (
    <div className="featured my-12 py-3">
      <SectionTittle
        heading={"FROM OUR MENU"}
        subHeading={"check it out"}
      ></SectionTittle>

      <div className="flex items-center space-y-2 gap-3 text-white my-7 p-10">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="space-y-2">
          <p>March 20, 2023</p>
          <h4>WHERE CAN I GET SOME?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nihil.
            Officiis nihil molestias assumenda at, repudiandae in? Sint quae
            quod nam quo sapiente, error dolore, eos fugit distinctio
            consequuntur magnam?
          </p>

          <button className=" rounded-md border-b-4 p-2 border-[#800080]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
