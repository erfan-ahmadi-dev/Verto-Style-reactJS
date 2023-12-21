import { useMutation } from "@tanstack/react-query";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendProductData, updateProductData } from "../api/productApi";

export const useFormHandler = (query, productId, setOpenModal, onRefetch) => {
  const addProductMutation = useMutation({
    mutationKey: ["addProduct"],
    mutationFn: (data) => {
      return sendProductData(`products`, data);
    },
    onSuccess: (data) => {
      if (data.data.status === "success") {
        toast.success("محصول مورداضافه شد");
        onRefetch(true);
      } else {
        toast.error("خطایی رخ داده است");
      }
    },
    onError: () => {
      toast.error("خطایی رخ داده است");
    },
  });

  const updateProductMutation = useMutation({
    mutationKey: ["updateProduct"],
    mutationFn: (data) => {
      const response = updateProductData(productId, data);
      return response;
    },
    onSuccess: (data) => {
      if (data.data.status === "success") {
        toast.success("محصول مورداصلاح شد");
        onRefetch(true);
      } else {
        toast.error("خطایی رخ داده است");
      }
    },
    onError: () => {
      toast.error("خطایی رخ داده است");
    },
  });
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
        images: [],
        thumbnail: "",
      });
    } else if (productId === undefined) {
      resetForm();
    }
  }, [query.isFetched, productId]);

  const handleInputFile = async (e) => {
    setImage(e.target.files);
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      description: content,
    }));
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === "price") {
      if (value < 1) {
        value = 1;
        toast.error("تعداد نمیتواند کمتر از صفر باشد");
      }
    }
    if (name === "stock") {
      if (value < 1) {
        value = 1;
        toast.error("تعداد نمیتواند کمتر از صفر باشد");
      }
    }
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
    if (!isProductIdDefined) {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
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

    if (isProductIdDefined) {
      const fdata = new FormData();
      if (formData.category.id !== "") {
        fdata.append("category", String(formData.category.id));
      }

      if (formData.subcategory.id !== "") {
        fdata.append("subcategory", String(formData.subcategory.id));
      }
      if (formData.name !== "") {
        fdata.append("name", formData.name);
      }
      if (formData.price !== "") {
        fdata.append("price", Number(formData.price));
      }

      if (formData.stock !== "") {
        fdata.append("quantity", Number(formData.stock));
      }
      if (formData.description !== "") {
        fdata.append("description", formData.description);
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        thumbnail: "",
        images: [],
      }));

      if (formData.images.length > 0) {
        fdata.append("thumbnail", formData.images[0]);
      }

      if (formData.images.length > 0) {
        for (let i = 0; i < formData.images.length; i++) {
          fdata.append("images", formData.images[i]);
        }
      }

      updateProductMutation.mutate(fdata);

      setOpenModal(false);
    } else {
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
      const fdata = new FormData();
      fdata.append("category", String(formData.category.id));
      fdata.append("subcategory", String(formData.subcategory.id));
      fdata.append("name", formData.name);
      fdata.append("price", Number(formData.price));
      fdata.append("quantity", Number(formData.stock));
      fdata.append("brand", "ورتو");
      fdata.append("description", formData.description);
      fdata.append("thumbnail", formData.images[0]);
      for (let i = 0; i < formData.images.length; i++) {
        fdata.append("images", formData.images[i]);
      }

      addProductMutation.mutate(fdata);
      resetForm();
      setOpenModal(false);
    }
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
