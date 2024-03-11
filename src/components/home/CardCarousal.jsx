import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/css/slider.css";

const CardCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="container  px-10 pt-20">
          <div className="bg-white w-3/4 h-64 rounded-lg shadow-xl -my-10 flex">
            <div className="w-2/3 flex flex-col items-start">
              <div className="flex items-center gap-2">
                <span>Última edición</span>
                <span>01</span>
              </div>
              <h1 className="text-4xl">
                The largest community of architecture enthusiasts
              </h1>
              <p>
                Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora.
              </p>
              <button>Suscríbete</button>
            </div>
            <div className="w-1/3 ">
              <img
                src="https://s3-alpha-sig.figma.com/img/1221/309e/d746f79db61669bd1ec1b95d2656abb7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UEvWqITbBvDUPo5pHyXKaX5UZJyDAgeZn9z6a2GpMXjKmUH1NKFEhmcFFYdr3vKsYJvs-kC6-i9OmT6deSCwhinwnpJz~R1tdqEc0KW878ooLgc0lgGo68HnmNIgG8wks1WR4fk1deri6qzmxog7eBdDXDqmRAa5XGK4o-7XoDdZCSiiMCA12a-T5v1C45lge5AzaSFKnZCo1B4WImcrY73DAY8NCk0b9UclVgWNQ5mZSPr1-XjNBKYAtwtLxft41tiW1beYkCQyMgXlfgBT6zprcN4~9pzr9vz3nVhfqSudpmbBdKFhnDNfjIr0J30atdkE23fM7MynLWmk05gyfg__"
                className=" h-full  object-cover object-center"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CardCarousal;
