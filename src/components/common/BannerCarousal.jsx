import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/css/slider.css";

const BannerCarousal = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <>
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
        <SwiperSlide style={{ height: isMobile ? "300px" : "600px" }}>
          <div className="relative">
            <img
              src="https://stage-dihomx.com/wp-content/uploads/2023/09/chez-nous-office-atelier-du-pont_1.jpg"
              alt="image 1"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center text-white justify-center  bg-black bg-opacity-40 p-6">
              <div className={`w-full text-center ${isMobile ? "" : "mt-80"}`}>
                <h1 className="text-2xl md:text-2xl font-bold lg:text-5xl">
                  Reemodelación condominio chef
                </h1>
                <h1 className="text-xl opacity-80 font-semibold underline">
                  Commercial | Barcelona, España | ingenio.hgs@gmail.com
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: isMobile ? "300px" : "600px" }}>
          <div className="relative">
            <img
              src="https://stage-dihomx.com/wp-content/uploads/2023/09/chez-nous-office-atelier-du-pont_1.jpg"
              alt="image 1"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center text-white justify-center  bg-black bg-opacity-40 p-6">
              <div className={`w-full text-center ${isMobile ? "" : "mt-80"}`}>
                <h1 className="text-2xl md:text-2xl font-bold lg:text-5xl">
                  Reemodelación condominio chef
                </h1>
                <h1 className="text-xl opacity-80 font-semibold underline">
                  Commercial | Barcelona, España | ingenio.hgs@gmail.com
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: isMobile ? "300px" : "600px" }}>
          <div className="relative">
            <img
              src="https://stage-dihomx.com/wp-content/uploads/2023/09/chez-nous-office-atelier-du-pont_1.jpg"
              alt="image 1"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center text-white justify-center  bg-black bg-opacity-40 p-6">
              <div className={`w-full text-center ${isMobile ? "" : "mt-80"}`}>
                <h1 className="text-2xl md:text-2xl font-bold lg:text-5xl">
                  Reemodelación condominio chef
                </h1>
                <h1 className="text-xl opacity-80 font-semibold underline">
                  Commercial | Barcelona, España | ingenio.hgs@gmail.com
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerCarousal;
