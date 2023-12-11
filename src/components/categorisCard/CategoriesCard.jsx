import { Link } from "react-router-dom";
import { PATHS } from "../../configs/RoutesConfig";
function CategoriesCard({ title, imageSrc, alt, link }) {
  return (
    <Link to={`${PATHS.PRODUCTS}/${link}`}>
      <div className="w-fit h-fit flex flex-col justify-center items-center cursor-pointer relative overflow-hidden gap-2 font-IranRegular">
        <div className="overflow-hidden rounded-full">
          <img
            className="  rounded-full w-28 h-28 aspect-squar hover:scale-110 hover:duration-700"
            src={imageSrc}
            alt={alt}
          />
        </div>
        <span className="font-medium">{title}</span>
      </div>
    </Link>
  );
}

export default CategoriesCard;
