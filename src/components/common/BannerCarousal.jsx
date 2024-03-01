import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const BannerCarousal = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="py-10 lg:px-60">
      <Slider {...settings}>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
      </Slider>
    </div>
  );
};

export default BannerCarousal;
