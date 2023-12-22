import { Modal, FileInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormHandler } from "../../../utils/addEditProductFormHandler";
import { getData } from "../../../api/defaultApi";
import { useQuery } from "@tanstack/react-query";
function ModalAddProduct({ openModal, setOpenModal, productId, onRefetch }) {
  const isProductIdDefined = productId !== undefined;

  const fetchData = () => {
    const response = getData(`products/${productId}`);
    return response;
  };
  const query = useQuery({
    queryKey: ["editProduct", productId],
    queryFn: fetchData,
    enabled: isProductIdDefined,
  });
  const {
    formRef,
    handleInputFile,
    handleQuill,
    handleInputChange,
    formSubmit,
    closeModal,
    formData,
    errors,
    value,
    // tempImage,
  } = useFormHandler(query, productId, setOpenModal, onRefetch);

  const fetchCategories = () => {
    const response = getData("categories");
    return response;
  };
  const queryCategory = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const fetchSubCategories = () => {
    const response = getData(`subcategories?category=${formData.category.id}`);
    return response;
  };

  const querySubCategory = useQuery({
    queryKey: ["subcategories", formData.category.id],
    queryFn: fetchSubCategories,
    enabled: formData.category.id !== undefined,
    retry: false,
  });
  return (
    <>
      <Modal dismissible show={openModal}>
        <Modal.Body>
          <form
            className="relative bg-white rounded-lg dark:bg-gray-700 space-y-20 "
            ref={formRef}
          >
            <div className="">
              <div className="flex flex-col gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    عکس محصول
                  </label>
                  <FileInput
                    name="images"
                    multiple
                    accept="image/*"
                    draggable
                    onChange={handleInputFile}
                    required
                  />
                  {/* <div className="flex overflow-x-auto gap-2">
                    {Array.from(tempImage).map((image, index) => {
                      const src = URL.createObjectURL(image);
                      return (
                        <img
                          src={src}
                          alt=""
                          className={`h-12 ${
                            src === formData.thumbnail
                              ? "border-2 border-blue-500"
                              : ""
                          }`}
                          key={index}
                        />
                      );
                    })}
                  </div> */}
                </div>

                <div className="flex gap-4 w-full">
                  <div className="w-full">
                    <label
                      htmlFor="product-name"
                      className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                        errors.name ? "text-red-500" : ""
                      }`}
                    >
                      نام محصول
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="product-name"
                      className={`editInput ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      placeholder="مثال: تیشرت مدل x"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="product-stock"
                      className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                        errors.stock ? "text-red-500" : ""
                      }`}
                    >
                      موجودی محصول
                    </label>
                    <input
                      type="number"
                      name="stock"
                      id="product-stock"
                      className={`editInput ${
                        errors.stock ? "border-red-500" : ""
                      }`}
                      placeholder="مثال: 10"
                      required
                      value={formData.stock}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex gap-4 w-full">
                  <div className="w-full">
                    <label
                      htmlFor="product-price"
                      className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                        errors.price ? "text-red-500" : ""
                      }`}
                    >
                      قیمت محصول
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="product-price"
                      className={`editInput ${
                        errors.price ? "border-red-500" : ""
                      }`}
                      placeholder="مثال: 450000"
                      required
                      value={formData.price}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="product-sizes"
                      className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                        errors.sizes ? "text-red-500" : ""
                      }`}
                    >
                      سایزها
                    </label>
                    <select
                      name="sizes"
                      id="product-sizes"
                      dir="rtl"
                      className={`editInput ${
                        errors.sizes ? "border-red-500" : ""
                      }`}
                      required
                      value={formData.sizes}
                      onChange={handleInputChange}
                    >
                      <option value="">لطفا سایز را انتخاب کنید</option>
                      <option value="S">small</option>
                      <option value="M">medium</option>
                      <option value="L">large</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 w-full">
                  <div className="w-full">
                    <label
                      htmlFor="product-category"
                      className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                        errors.category ? "text-red-500" : ""
                      }`}
                    >
                      دسته بندی
                    </label>
                    <select
                      name="category"
                      id="product-category"
                      dir="rtl"
                      className={`editInput ${
                        errors.category ? "border-red-500" : ""
                      }`}
                      required
                      value={formData.category.name || "hint"}
                      onChange={handleInputChange}
                    >
                      <option value="hint" disabled>
                        لطفا دسته بندی را انتخاب کنید
                      </option>
                      {queryCategory.isLoading
                        ? ""
                        : queryCategory.data.data.categories.map((item) => {
                            return (
                              <option
                                value={item.name}
                                key={item._id}
                                data-id={item._id}
                              >
                                {item.name}
                              </option>
                            );
                          })}
                    </select>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="product-subcategories"
                      className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                        errors.subcategory ? "text-red-500" : ""
                      }`}
                    >
                      زیر دسته بندی
                    </label>
                    <select
                      name="subcategory"
                      id="product-subcategories"
                      dir="rtl"
                      className={`editInput ${
                        errors.subcategory ? "border-red-500" : ""
                      }`}
                      required
                      value={formData.subcategory.name || "hint"} // Provide a default value to handle the "hint" case
                      onChange={handleInputChange}
                    >
                      <option value="hint" disabled>
                        لطفا دسته بندی را انتخاب کنید
                      </option>
                      {querySubCategory.data === undefined
                        ? ""
                        : !querySubCategory.isLoading &&
                          querySubCategory.data.data.subcategories.map(
                            (item) => (
                              <option
                                value={item.name}
                                key={item._id}
                                data-id={item._id}
                              >
                                {item.name}
                              </option>
                            )
                          )}
                    </select>
                  </div>
                </div>
                <ReactQuill
                  theme="snow"
                  value={formData.description}
                  name="description"
                  onChange={handleQuill}
                  id="my-editor"
                  modules={{
                    toolbar: [
                      ["bold", "italic", "underline", "strike"], // toggled buttons
                      ["blockquote", "code-block"],

                      [{ header: 1 }, { header: 2 }], // custom button values
                      [{ list: "ordered" }, { list: "bullet" }],
                      [{ script: "sub" }, { script: "super" }], // superscript/subscript
                      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
                      [{ direction: "rtl" }], // text direction

                      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
                      [{ header: [1, 2, 3, 4, 5, 6, false] }],

                      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                      [{ font: [] }],
                      [{ align: [] }],

                      ["clean"],
                    ],
                  }}
                  className={`w-full h-32 mb-5 ${
                    errors.description ? "border-red-500" : ""
                  }`}
                  required
                />
                <div className="flex gap-5 w-full items-center mt-10">
                  <button
                    type="submit"
                    className="primaryButton"
                    onClick={formSubmit}
                  >
                    ذخیره
                  </button>
                  <button
                    type="button"
                    className="cancelButton"
                    onClick={closeModal}
                  >
                    لغو
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalAddProduct;
