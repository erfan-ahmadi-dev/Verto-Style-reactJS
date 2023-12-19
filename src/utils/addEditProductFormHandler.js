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
    rating: 4,
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
        category: { id: response.category._id, name: response.category.name },
        subcategory: {
          id: response.subcategory._id,
          name: response.subcategory.name,
        },
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
    console.log("temp", e.target.files);
    console.log("temp2", e.target.files);
    setFormData({
      ...formData,
      images: e.target.files,
      thumbnail: e.target.files[0],
    });

    setErrors({
      ...errors,
      images: false,
    });
  };

  const handleQuill = (content, delta, source, editor) => {
    setValue(content);
    console.log("value", value);
    setFormData({
      ...formData,
      description: content,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "category" || name === "subcategory") {
      const selectedOption = e.target.options[e.target.selectedIndex];
      const id = selectedOption.getAttribute("data-id");

      setFormData({
        ...formData,
        [name]: { id, name: value },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
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

    data.append("images", formData.images);
    data.append("name", formData.name);
    data.append("category", formData.category);
    data.append("subcategory", formData.subcategory);
    data.append("quantity", Number(formData.stock));
    data.append("price", Number(formData.price));
    data.append("rating", 3.6);
    data.append("description", formData.description);
    for (let pair of data.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    console.log(formData);

    // Reset form after data has been logged
    resetForm();
  };

  const resetForm = () => {
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
