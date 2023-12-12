import { Link } from "react-router-dom";
import { PATHS } from "../../configs/RoutesConfig";
import { BANNERS_DATA } from "../../utils/Constants";

function Banner({ classStyle, bannerindex, bannerindex2 }) {
  return (
    <div className={classStyle}>
      {classStyle === "bannerWide" ? (
        <div className=" overflow-hidden w-full h-full">
          <Link to={`${PATHS.PRODUCTS}/${BANNERS_DATA[bannerindex].link}`}>
            <img
              src={BANNERS_DATA[bannerindex].imageSrc}
              className="bannerImage"
              alt={BANNERS_DATA[bannerindex].alt}
            />
          </Link>
        </div>
      ) : (
        <>
          <div className=" w-full overflow-hidden">
            <Link to={`${PATHS.PRODUCTS}/${BANNERS_DATA[bannerindex].link}`}>
              <img
                src={BANNERS_DATA[bannerindex].imageSrc}
                className="bannerImage"
                alt={BANNERS_DATA[bannerindex].alt}
              />
            </Link>
          </div>
          <div className=" w-full overflow-hidden">
            <Link to={`${PATHS.PRODUCTS}/${BANNERS_DATA[bannerindex2].link}`}>
              <img
                src={BANNERS_DATA[bannerindex2].imageSrc}
                className="bannerImage "
                alt={BANNERS_DATA[bannerindex2].alt}
              />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Banner;
