import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { API } from "../../Config/Api";
import { useNavigate} from 'react-router-dom'
import { useMutation } from  'react-query'

const AddFood = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate()
  const [DataFood, setDataFood] = useState({
    name: "",
    price: 0,
    image: "",
  });

  const handleOnChange = (e) => {
    setDataFood({
      ...DataFood,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      }

      // Store data with FormData as object
      const formData = new FormData()
      formData.set("name", DataFood.name)
      formData.set("price", DataFood.price)
      formData.set("image", DataFood.image[0], DataFood.image[0].name)

      // Insert product data
      const response = await API.post("/foods", formData, config)
      setIsLoading(true);
      if (response.status === 200) {
        window.location.reload();
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error)
      alert(error)
    }
  })


  return (
    <div>
      <form onSubmit={(e) => handleSubmit.mutate(e)}>
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-lg font-medium text-gray-700"
          >
            Nama Menu
          </label>
          <input
            type="text"
            name="name"
            class="block w-full p-3  text-md text-gray-900 border-2 border-gray-300 rounded-sm  focus:ring-aqua focus:border-aqua dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-aqua dark:focus:border-aqua"
            required
            onChange={handleOnChange}
          />
        </div>
        <div className="mt-8 w-full">
          <div>
            <span className="mb-2 block text-lg font-medium text-gray-700">
              Foto Menu
            </span>
          </div>
          {!preview ? (
            <label htmlFor="formId">
              <div className="cursor-pointer bg-gray-200 text-center py-16 text-gray-500 rounded-sm p-5 ">
                <input
                  accept=".png,.jpg,.jpeg,.svg"
                  type="file"
                  id="formId"
                  name="image"
                  hidden
                  onChange={handleOnChange}
                />
                <AiOutlineCloudUpload className="text-gray-500 m-auto w-[60px] h-[60px]" />
                <span>Drag and Drop a File here or Click</span>
              </div>
            </label>
          ) : (
            <div className="relative">
              {/* <MdOutlineCancel className="absolute w-6 h-6" onClick={setPreview(null)}/> */}
              <img variant="top" src={preview} alt={preview} className="w-36" />
            </div>
          )}
        </div>

        {}
        <div className="mt-8">
          <label
            for="default-search"
            class="mb-2 block text-lg font-medium text-gray-700 "
          >
            Harga Menu
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 px-5  pointer-events-none text-white bg-aqua">
              Rp
            </div>
            <input
              type="number"
              name="price"
              onChange={handleOnChange}
              class="block w-full p-3 pl-16 text-md text-gray-900 border-2 border-gray-300 rounded-sm  focus:ring-aqua focus:border-aqua dark:bg-gray-700 dark:border-aqua dark:placeholder-gray-400 dark:text-white dark:focus:ring-aqua dark:focus:border-aqua"
              required
            />
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <button className="bg-greent  px-12 py-2 text-white rounded-sm">
            {isLoading ? "Loading ..." : "Simpan"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
