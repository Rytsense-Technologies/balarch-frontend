import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/css/slider.css";

const BannerCarousal = () => {
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
        <div className="relative">
          <img
            src="https://stage-dihomx.com/wp-content/uploads/2023/09/chez-nous-office-atelier-du-pont_1.jpg"
            alt="image 1"
            className="object-fill h-full w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center text-white justify-end bg-black bg-opacity-40 p-6">
            <div className="w-1/2 text-center md:w-2/3">
              <h1 className="mb-4 text-2xl md:text-2xl font-bold lg:text-5xl">
                Reemodelecion condominio chef
              </h1>
              <h1 className="mb-12 text-xl opacity-80 font-semibold underline">
                Commercial | Barcelona Espafia | ingenio.hgs@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://stage-dihomx.com/wp-content/uploads/2023/09/chez-nous-office-atelier-du-pont_1.jpg"
            alt="image 1"
            className="object-fill h-full w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center text-white justify-end bg-black bg-opacity-40 p-6">
            <div className="w-1/2 text-center md:w-2/3">
              <h1 className="mb-4 text-2xl md:text-2xl font-bold lg:text-5xl">
                Reemodelecion condominio chef
              </h1>
              <h1 className="mb-12 text-xl opacity-80 font-semibold underline">
                Commercial | Barcelona Espafia | ingenio.hgs@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://stage-dihomx.com/wp-content/uploads/2023/09/chez-nous-office-atelier-du-pont_1.jpg"
            alt="image 1"
            className="object-fill h-full w-1/2"
          />
          <div className="absolute inset-0 flex flex-col items-center text-white justify-end bg-black bg-opacity-40 p-6">
            <div className="w-1/2 text-center md:w-2/3">
              <h1 className="mb-4 text-2xl md:text-2xl font-bold lg:text-5xl">
                Reemodelecion condominio chef
              </h1>
              <h1 className="mb-12 text-xl opacity-80 font-semibold underline">
                Commercial | Barcelona Espafia | ingenio.hgs@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* Add more slides with images and text */}
    </Swiper>
  );
};

export default BannerCarousal;
