import React from "react";
import MainSlider from "../../components/slider/mainSlider/MainSlider";
import CategoriesCard from "../../components/categorisCard/CategoriesCard";
import faTexts, { CATEGOREIS_ITEMS } from "../../utils/Constants";
import ProductSlider from "../../components/slider/productSlider/ProductSlider";

import ProductShowCase from "../../components/productShowCase/ProductShowCase";
import Banner from "../../components/banner/Banner";
import { getData } from "../../api/defaultApi";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const fetchProductWithOffer = (urlQuery) => {
    return getData(urlQuery);
  };
  const offerQuery = useQuery({
    queryKey: ["productsWithOffer"],
    queryFn: () =>
      fetchProductWithOffer("products?page=1&limit=6&quantity[lt]=15"),
  });
  const menClotheQuery = useQuery({
    queryKey: ["manclothe"],
    queryFn: () =>
      fetchProductWithOffer(
        "products?page=1&limit=6&category=6561eaa51adeb81260019942"
      ),
  });
  const womenClotheQuery = useQuery({
    queryKey: ["womanclothe"],
    queryFn: () =>
      fetchProductWithOffer(
        "products?page=1&limit=6&category=6561eaa51adeb81260019942"
      ),
  });
  const womenShoesQuery = useQuery({
    queryKey: ["womanShoes"],
    queryFn: () =>
      fetchProductWithOffer(
        "products?page=1&limit=6&category=6561eaa51adeb81260019942"
      ),
  });

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
            isLoading={offerQuery.isLoading}
            data={offerQuery.data?.data.products}
          />
        </ProductShowCase>

        <Banner classStyle="bannerWide" bannerindex={0} />

        <ProductShowCase title={faTexts.offer}>
          <ProductSlider
            isLoading={menClotheQuery.isLoading}
            data={menClotheQuery.data?.data.products}
          />
        </ProductShowCase>
        <Banner
          classStyle="bannerSideBySide"
          bannerindex={1}
          bannerindex2={2}
        />

        <ProductShowCase title={faTexts.offer}>
          <ProductSlider
            isLoading={womenClotheQuery.isLoading}
            data={womenClotheQuery.data?.data.products}
          />
        </ProductShowCase>
        <Banner classStyle="bannerWide" bannerindex={3} />
        <ProductShowCase title={faTexts.offer}>
          <ProductSlider
            isLoading={womenShoesQuery.isLoading}
            data={womenShoesQuery.data?.data.products}
          />
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
