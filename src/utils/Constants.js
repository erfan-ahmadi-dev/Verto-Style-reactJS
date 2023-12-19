import { category } from "../assets/images";
import { banner } from "../assets/images";

export const BASE_URL = "http://localhost:8000/api/";
export const BASE_IMAGE_URL = "http://localhost:8000/images/products/images/";
export const BASE_THUMBNAIL_URL =
  "http://localhost:8000/images/products/thumbnails/";
const faTexts = {
  home: "صفحه نخست",
  products: "محصولات",
  blog: "بلاگ",
  login: "ورود",
  logout: "خروج از حساب",
  contactus: "ارتباط با ما",
  search: "جستجو",
  404: "متاسفانه صفحه مورد نظر یافت نشد",
  backToHome: "برای رفتن به صفحه نخست روی دکمه زیر کلیک کنید",
  emailInput: "ایمیل",
  username: "نام کاربری",
  minUserName: "نام کاربری میبایست بیشتر از 3 حرف باشد",
  usernameRequired: "وارد کردن نام کاربری الزامی هست",
  wrongUserName: "نام کاربری وارد شده نامعتبر هست",
  passInput: "رمز عبور",
  minPassword: "رمز عبور میبایست بیشتر از 5 حرف باشد",
  wrongEmail: "ایمیل وارد شده نامعتبر هست",
  emailRequired: "وارد کردن ایمیل الزامی هست",
  passRequired: "وارد کردن رمزعبور الزامی هست",
  footerText:
    " در ورتو ‌استایل می‌توانید همه آنچه مرتبط با مد و پوشاک از انواع لباس زنانه، لباس مردانه و لباس بچگانه گرفته تا کیف و کفش و اکسسوری را با تخفیف ویژه در حراج ها، پیدا کنید و به سادگی یک ست کامل از جدیدترین‌ برندهای معتبر را بخرید.",
  storeName: "فروشگاه اینترنتی مد و لباس ورتواستایل",
  copyRight: "تمامی حقوق متعلق به ورتو استایل هست  ",
  offer: "پیشنهاد شگفت انگیز",
  connectionLost:
    "متاسفانه اتصال شما به وب سایت قطع شده است. لطفاً دوباره سعی کنید.",
  refresh: "بارگذاری مجدد",
  menClothe: " پیراهن مردانه",
  menShoes: "کفش مردانه",
  menSport: "ورزشی مردانه",
  womenClothe: "مانتو زنانه",
  womenShoes: "کفش زنانه",
  womenSport: "ورزشی زنانه",

  userFullName: "نام کاربر",
  orders: "سفارشات",
  ordersMangment: "مدیریت سفارشات",
  orderCompleted: "سفارش های تحویل داده شده ",
  orderPending: "سفارش های در انتظار ارسال ",
  orderDate: " زمان ثبت سفارش",
  orderReview: " بررسی سفارش",
  operation: "عملیات",

  entityAndPrice: "موجودی و قیمت ها",
  productImage: "عکس محصول",
  producName: "نام محصول",
  productPrice: "قیمت",
  productCategory: "دسته بندی",
  productSubCateory: "زیر دسته بندی",
  productBrand: "برند",
  productQuantity: "تعداد محصول",
  productDescription: "توضیحات محصول",
  productsManagment: "مدیریت محصولات",
  addProduct: "افزودن محصول",

  priceStockMangmant: "مدیریت قیمت و موجودی ها",
  dashborad: "داشبورد",
  totalPrice: "مجموع مبلغ",
  stock: "موجودی",
  image: "تصویر",
  edit: "ویرایش",
  delete: "حذف",
  save: "ذخیره",
  errorFetchCategory:
    "خطایی در زمان دریافت اطلاعات دسته بندی برای محصول  مورد نظر رخ داده",
  errorFetchSubCategory:
    "خطایی در زمان دریافت اطلاعات زیر دسته بندی برای محصول  مورد نظر رخ داده",
  erroFetchingProduct: "خطایی در زمان دریافت محصولات رخ داده ",
};

// TODO define links insde PATHS
export const SUB_CATEGOREIS_LINK = [
  {
    title: "لباس مردانه",
    link: "6561eb0c1adeb81260019951",
  },
  {
    title: "لباس زنانه",
    link: "6561ec371adeb8126001996b",
  },
  {
    title: "کفش مردانه",
    link: "6561eaf51adeb8126001994d",
  },
  {
    title: "کفش زنانه",
    link: "6561ec3b1adeb8126001996f",
  },
  {
    title: "ورزشی مردانه",
    link: "6561ec0a1adeb8126001995f",
  },

  {
    title: "ورزشی زنانه",
    link: "6561ec301adeb81260019967",
  },
];

export const BANNERS_DATA = [
  {
    imageSrc: banner.menClotheBanner,
    link: SUB_CATEGOREIS_LINK[0].link,
    alt: "mens clothe category",
  },
  {
    imageSrc: banner.menShoesBanner,
    link: SUB_CATEGOREIS_LINK[1].link,
    alt: "mens shoes category",
  },
  {
    imageSrc: banner.menSportBanner,
    link: SUB_CATEGOREIS_LINK[2].link,
    alt: "mens sport category",
  },
  {
    imageSrc: banner.womenClotheBanner,
    link: SUB_CATEGOREIS_LINK[3].link,
    alt: "womens clothe category",
  },
  {
    imageSrc: banner.womenShoesBanner,
    link: SUB_CATEGOREIS_LINK[4].link,
    alt: "womens shoes category",
  },
  {
    imageSrc: banner.womenSportBanner,
    link: SUB_CATEGOREIS_LINK[5].link,
    alt: "womens sport category",
  },
];
export const CATEGOREIS_ITEMS = [
  {
    title: SUB_CATEGOREIS_LINK[0].title,
    imgsrc: category.menClothe,
    alt: "mens clothe category",
    link: SUB_CATEGOREIS_LINK[0].link,
  },
  {
    title: SUB_CATEGOREIS_LINK[1].title,
    imgsrc: category.menShoes,
    alt: "mens shoes category",
    link: SUB_CATEGOREIS_LINK[1].link,
  },
  {
    title: SUB_CATEGOREIS_LINK[2].title,
    imgsrc: category.menSport,
    alt: "mens sport category",
    link: SUB_CATEGOREIS_LINK[2].link,
  },
  {
    title: SUB_CATEGOREIS_LINK[3].title,
    imgsrc: category.womenClothe,
    alt: "womens clothe category",
    link: SUB_CATEGOREIS_LINK[3].link,
  },
  {
    title: SUB_CATEGOREIS_LINK[4].title,
    imgsrc: category.womenShoes,
    alt: "womens shoes category",
    link: SUB_CATEGOREIS_LINK[4].link,
  },
  {
    title: SUB_CATEGOREIS_LINK[5].title,
    imgsrc: category.womenSport,
    alt: "womens sport category",
    link: SUB_CATEGOREIS_LINK[5].link,
  },
];

export default faTexts;
