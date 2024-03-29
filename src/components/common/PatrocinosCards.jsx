import { cards } from "../../mock/Data";

const PatrocinosCards = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-40">
      <section className="text-gray-600 mb-10 body-font">
        <div className="flex flex-col text-center w-full mt-5">
          <h1 className="text-sm title-font font-semibold text-gray-500">
            SPONSORED
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {cards.map((card, index) => (
            <div key={index} className="p-2">
              <div className="flex flex-col items-center justify-center border border-gray-300 p-4">
                <img
                  src={card.img}
                  className="w-24 h-24 object-contain"
                  alt={card.title}
                />
                <h2 className="mt-4 text-lg font-semibold text-center text-gray-900">
                  {card.title}
                </h2>
                <p className="text-sm text-center">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PatrocinosCards;
