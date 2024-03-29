import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/css/slider.css";

const BannerCarousel = () => {
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
        <SwiperSlide style={{ height: isMobile ? "300px" : "100%" }}>
          <div className="relative">
            <img
              src="https://stage-dihomx.com/wp-content/uploads/2023/11/MG_5664_65.jpg"
              alt="image 1"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center text-white justify-end  bg-black bg-opacity-40 p-6">
              <div className="pb-20">
                <h1 className="text-2xl md:text-2xl font-bold lg:text-5xl">
                  Condominium Chef Remodeling
                </h1>
                <h1 className="text-xl opacity-80 font-semibold underline">
                  Commercial | Barcelona, Spain | ingenio.hgs@gmail.com
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: isMobile ? "300px" : "100%" }}>
          <div className="relative">
            <img
              src="https://stage-dihomx.com/wp-content/uploads/2023/09/chez-nous-office-atelier-du-pont_1.jpg"
              alt="image 1"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center text-white justify-end mb-20 bg-black bg-opacity-40 p-6">
              <div className="pb-20">
                <h1 className="text-2xl md:text-2xl font-bold lg:text-5xl">
                  Condominium Chef Remodeling
                </h1>
                <h1 className="text-xl opacity-80 font-semibold underline">
                  Commercial | Barcelona, Spain | ingenio.hgs@gmail.com
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: isMobile ? "300px" : "100%" }}>
          <div className="relative">
            <img
              src="https://stage-dihomx.com/wp-content/uploads/2023/09/fom-university-pavilion-j-mayer-h-architects_4-1.jpg"
              alt="image 1"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center text-white justify-end mb-20 bg-black bg-opacity-40 p-6">
              <div className="pb-20">
                <h1 className="text-2xl md:text-2xl font-bold lg:text-5xl">
                  Condominium Chef Remodeling
                </h1>
                <h1 className="text-xl opacity-80 font-semibold underline">
                  Commercial | Barcelona, Spain | ingenio.hgs@gmail.com
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerCarousel;
