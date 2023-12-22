import React from "react";
import MainSlider from "../../components/slider/mainSlider/MainSlider";
import CategoriesCard from "../../components/categorisCard/CategoriesCard";
import faTexts, { CATEGOREIS_ITEMS } from "../../utils/Constants";
import ProductSlider from "../../components/slider/productSlider/ProductSlider";

import ProductShowCase from "../../components/productShowCase/ProductShowCase";
import Banner from "../../components/banner/Banner";
import { getData } from "../../api/defaultApi";
import { useQuery } from "@tanstack/react-query";
// TODO rename variables and query names
function Home() {
  const fetchProductWithOffer = (urlQuery) => {
    return getData(urlQuery);
  };
  const offerQuery = useQuery({
    queryKey: ["productsWithOffer"],
    queryFn: () =>
      fetchProductWithOffer(
        "products?sort=-updatedAt&page=1&limit=6&subcategory=6561eb0c1adeb81260019951"
      ),
  });
  const menClotheQuery = useQuery({
    queryKey: ["manclothe"],
    queryFn: () =>
      fetchProductWithOffer(
        "products?sort=-updatedAt&page=1&limit=6&subcategory=6561eaf51adeb8126001994d"
      ),
  });
  const womenClotheQuery = useQuery({
    queryKey: ["womanclothe"],
    queryFn: () =>
      fetchProductWithOffer(
        "products?sort=-updatedAt&page=1&limit=6&subcategory=6561ec371adeb8126001996b"
      ),
  });
  const womenShoesQuery = useQuery({
    queryKey: ["womanShoes"],
    queryFn: () =>
      fetchProductWithOffer(
        "products?sort=-updatedAt&page=1&limit=6&subcategory=6561ec3b1adeb8126001996f"
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
        <ProductShowCase title="لباس مردانه">
          <ProductSlider
            isLoading={offerQuery.isLoading}
            data={offerQuery.data?.data.products}
          />
        </ProductShowCase>

        <Banner classStyle="bannerWide" bannerindex={0} />

        <ProductShowCase title="کفش مردانه">
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

        <ProductShowCase title="لباس زنانه">
          <ProductSlider
            isLoading={womenClotheQuery.isLoading}
            data={womenClotheQuery.data?.data.products}
          />
        </ProductShowCase>
        <Banner classStyle="bannerWide" bannerindex={3} />
        <ProductShowCase title="کفش زنانه">
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
