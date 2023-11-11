import { useEffect, useState } from "react";
import SectionTittle from "../../../shared/SectionTittle/SectionTittle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <section className="space-y-4">
      <SectionTittle
        heading={"Testimonials"}
        subHeading={"---What Our Clients Say---"}
      ></SectionTittle>

      <div>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((reviews) => (
            <SwiperSlide key={reviews._id}>
              <div className="md:flex space-y-2 flex-col items-center p-20">
                <Rating style={{ maxWidth: 250 }} value={reviews.rating} />
                <p>{reviews.details}</p>
                <h4 className="text-3xl font-semibold">{reviews.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
