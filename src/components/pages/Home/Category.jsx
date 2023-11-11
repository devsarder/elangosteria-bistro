import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import "swiper/css";
import "swiper/css/pagination";
import SectionTittle from "../../shared/SectionTittle/SectionTittle";
const Category = () => {
  return (
    <section>
      <div>
        <SectionTittle
          heading={"order now"}
          subHeading={"from 11.00am to 10.00pm"}
        ></SectionTittle>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-7"
      >
        <SwiperSlide>
          <img className="rounded-md " src={slider1} alt="" />
          <h3 className="text-3xl text-center -mt-10 font-semibold text-[#800080] ">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3 className="text-3xl text-center -mt-10 font-semibold text-[#800080] ">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />

          <h3 className="text-3xl text-center -mt-10 font-semibold text-[#800080] ">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3 className="text-3xl text-center -mt-10 font-semibold text-[#800080] ">
            Deserts
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
