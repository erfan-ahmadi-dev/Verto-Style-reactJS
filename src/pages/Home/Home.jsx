import React from "react";
import MainSlider from "../../components/slider/mainSlider/MainSlider";
import CategoriesCard from "../../components/categorisCard/CategoriesCard";
import { CATEGOREIS_ITEMS } from "../../utils/Constants";

function Home() {
  return (
    <div className="w-full min-w-full h-full flex flex-col items-center justify-center gap-2 ">
      <MainSlider />
      <main className="w-full h-full px-5">
        <div className="w-full grid grid-rows-3 grid-cols-2 sm:grid-rows-2 sm:grid-cols-3 gap-5 lg:grid-cols-6 lg:grid-rows-1  place-items-center mt-5 ">
          {CATEGOREIS_ITEMS.map((item, index) => {
            console.log(item.imgsrc);
            return (
              <CategoriesCard
                key={index}
                title={item.title}
                imageSrc={item.imgsrc}
                alt={item.alt}
                link={item.link}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Home;
