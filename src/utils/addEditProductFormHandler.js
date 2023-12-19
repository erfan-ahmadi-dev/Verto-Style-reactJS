import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const useFormHandler = (query, productId, setOpenModal) => {
  const closeModal = () => {
    setOpenModal(false);
    productId = undefined;
    setErrors({
      name: false,
      stock: false,
      price: false,
      sizes: false,
      category: false,
      subcategory: false,
      description: false,
      images: false,
    });
    console.log(productId);
  };

  const [tempImage, setImage] = useState([]);
  const [value, setValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    stock: "",
    price: "",
    sizes: "",
    category: "",
    subcategory: "",
    description: "",
    images: [],
    thumbnail: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    stock: false,
    price: false,
    sizes: false,
    category: false,
    subcategory: false,
    description: false,
    images: false,
  });
  const isProductIdDefined = productId !== undefined;
  const formRef = useRef();
  useEffect(() => {
    if (query.isFetched && isProductIdDefined) {
      const response = query.data.data.product;
      console.log(query.data.data.product);

      setFormData({
        name: response.name,
        stock: response.quantity,
        price: response.price,
        sizes: "",
        category: response.category.name,
        subcategory: response.subcategory.name,
        description: response.description,
        images: [response.images],
        thumbnail: response.thumbnail,
      });
    } else if (productId === undefined) {
      resetForm();
    }
  }, [query.isFetched, productId]);
  const handleInputFile = async (e) => {
    setImage(e.target.files);

    setErrors({
      ...errors,
      images: false,
    });
  };

  const handleQuill = (content, delta, source, editor) => {
    setValue(content);
    setFormData({
      ...formData,
      description: content,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const formSubmit = async (event) => {
    event.preventDefault();

    const requiredFields = [
      "name",
      "stock",
      "price",
      "sizes",
      "category",
      "subcategory",
      "description",
    ];
    let formIsValid = true;

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: true,
        }));
        formIsValid = false;
      }
    });

    if (tempImage.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        images: true,
      }));
      formIsValid = false;
    }

    if (!formIsValid) {
      toast.error("لطفا اطلاعات را تکمیل کنید");
      return;
    }

    const data = new FormData(formRef.current);

    for (let i = 0; i < tempImage.length; i++) {
      data.append("images", URL.createObjectURL(tempImage[i]));
    }

    if (tempImage.length > 0) {
      setFormData({
        ...formData,
        thumbnail: URL.createObjectURL(tempImage[0]),
      });
    }
    console.log(data.entries());
    resetForm();
  };
  const resetForm = () => {
    console.log("rested");
    setFormData({
      name: "",
      stock: "",
      price: "",
      sizes: "",
      category: "",
      subcategory: "",
      description: "",
      images: [],
      thumbnail: "",
    });

    setImage([]);
    setValue("");
    setErrors({
      name: false,
      stock: false,
      price: false,
      sizes: false,
      category: false,
      subcategory: false,
      description: false,
      images: false,
    });
  };
  // ... (rest of the code for form handling)
  return {
    formRef,
    handleInputFile,
    handleQuill,
    handleInputChange,
    formSubmit,
    closeModal,
    formData,
    errors,
    value,
    tempImage,
    resetForm,
  };
};
