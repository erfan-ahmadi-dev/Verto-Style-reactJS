import { Button, Modal, FileInput } from "flowbite-react";
import { ModalFooter } from "flowbite-react/lib/esm/components/Modal/ModalFooter";
import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function ModalAddProduct({ openModal, setOpenModal }) {
  const [tempImage, setImage] = useState([]);
  const formRef = useRef();
  console.log("test");
  const handleInputFile = (e) => {
    console.log(typeof e.target.files);
    Array.from(e.target.files).map((item) => {
      console.log(item);
    });
    setImage(e.target.files);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(formRef.current);
    console.log(data);
  };

  const closeModal = () => {
    setOpenModal(false);
    setImage([]);
  };

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
                  <label
                    for="first-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    عکس محصول
                  </label>
                  <FileInput
                    id="file-upload-helper-text"
                    multiple
                    accept="image/*"
                    draggable
                    onChange={handleInputFile}
                  />
                  <div className="flex overflow-x-auto gap-2">
                    {Array.from(tempImage).map((image, index) => {
                      const src = URL.createObjectURL(image);
                      return (
                        <img src={src} alt="" className=" h-12 " key={index} />
                      );
                    })}
                  </div>
                </div>

                <div className="flex gap-4 w-full">
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      نام محصول
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="product-name"
                      className="editInput"
                      placeholder="مثال: تیشرت مدل x"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      موجودی محصول
                    </label>
                    <input
                      type="number"
                      name="stock"
                      id="product-stock"
                      className="editInput"
                      placeholder="مثال: 10"
                      required=""
                    />
                  </div>
                </div>
                <div className="flex gap-4 w-full">
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      قیمت محصول
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="product-price"
                      className="editInput"
                      placeholder="مثال: 450000"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      سایزها
                    </label>

                    <select
                      defaultValue="hint"
                      name="sizes"
                      id="product-sizes"
                      dir="rtl"
                      className="editInput "
                    >
                      <option disabled value="hint">
                        لطفا سایزها را انتخاب کنید
                      </option>
                      <option value="S">small</option>
                      <option value="M">medium</option>
                      <option value="L">large</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 w-full">
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      دسته بندی
                    </label>

                    <select
                      defaultValue="hint"
                      name="category"
                      id="product-category"
                      dir="rtl"
                      className="editInput "
                    >
                      <option disabled value="hint">
                        لطفا دسته بندی را انتخاب کنید
                      </option>
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      زیر دسته بندی
                    </label>

                    <select
                      defaultValue="hint"
                      name="subcategory"
                      id="product-subcategories"
                      dir="rtl"
                      className="editInput "
                    >
                      <option disabled value="hint">
                        لطفا زیر دسته بندی را انتخاب کنید
                      </option>
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
                <ReactQuill
                  theme="snow"
                  // value={value}
                  // onChange={setValue}
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
                  className="w-full h-44 mb-5 "
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
