import React from "react";
import MainSlider from "../../components/slider/mainSlider/MainSlider";
import CategoriesCard from "../../components/categorisCard/CategoriesCard";
import faTexts, { BANNERS_DATA, CATEGOREIS_ITEMS } from "../../utils/Constants";
import ProductSlider from "../../components/slider/productSlider/ProductSlider";

import ProductShowCase from "../../components/productShowCase/ProductShowCase";
import Banner from "../../components/banner/Banner";
import { getData } from "../../api/defaultApi";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const fetchProductWithOffer = () => {
    return getData("products?page=1&limit=6&quantity[lt]=15");
  };
  const query = useQuery({
    queryKey: ["productsWithOffer"],
    queryFn: fetchProductWithOffer,
  });

  query.isLoading
    ? console.log("loading")
    : console.log(query.data.data.products);

  return (
    <div className="w-full min-w-full h-full flex flex-col items-center justify-center gap-2 ">
      <MainSlider />
      <main className="w-full h-full px-5 flex flex-col">
        <div className="w-full grid grid-rows-3 grid-cols-2 sm:grid-rows-2 sm:grid-cols-3 gap-5 lg:grid-cols-6 lg:grid-rows-1  place-items-center mt-5 ">
          {CATEGOREIS_ITEMS.map((item, index) => {
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
        <ProductShowCase title={faTexts.offer}>
          <ProductSlider
            isLoading={query.isLoading}
            data={query.data?.data.products}
          />
        </ProductShowCase>

        <Banner classStyle="bannerWide" bannerindex={0} />
        <ProductShowCase title={faTexts.offer}>
          {/* <ProductSlider
            isLoading={query.isLoading}
            data={query.data?.data.products}
          /> */}
        </ProductShowCase>
        <Banner
          classStyle="bannerSideBySide"
          bannerindex={1}
          bannerindex2={2}
        />
        <ProductShowCase title={faTexts.offer}>
          {/* <ProductSlider
            isLoading={query.isLoading}
            data={query.data?.data.products}
          /> */}
        </ProductShowCase>
        <Banner classStyle="bannerWide" bannerindex={3} />
        <ProductShowCase title={faTexts.offer}>
          {/* <ProductSlider
            isLoading={query.isLoading}
            data={query.data?.data.products}
          /> */}
        </ProductShowCase>
        <Banner
          classStyle="bannerSideBySide"
          bannerindex={4}
          bannerindex2={5}
        />
      </main>
    </div>
  );
}

export default Home;
