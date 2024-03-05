import React from "react";
import { cards } from "../../mock/Data";

const PatrocinosCards = () => {
  return (
    <div className="lg:px-40">
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full mt-5">
          <h1 className="sm:text-sm text-sm  title-font font-semibold  text-gray-500">
            PATROCINADOS
          </h1>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              <div className="p-2 w-full flex text-center justify-center">
                <div className="border-4 border-gray-300 px-8 py-6">
                  <img src={card.img} className="w-40" />
                  <h2 className="title-font font-semibold text-xl text-gray-900">
                    {card.title}
                  </h2>
                  <p className="text-xs">{card.subtitle}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PatrocinosCards;
