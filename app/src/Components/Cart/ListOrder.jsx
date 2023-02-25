import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useCart } from "react-use-cart";
import { API } from "../../Config/Api";

const ListOrder = () => {
  const { data: foods, refetch } = useQuery("foods", async () => {
    const res = await API.get("/foods");
    return res.data.foods;
  });
  useEffect(() => {
    refetch()
  }, [])

  console.log("data foodsss", foods);
  return (
    <div className="grid grid-cols-3 gap-12 mb-[1rem]">
      {foods?.map((food) => (
        <div class=" w-48 h-60 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            class="rounded-t-lg h-[65%] w-[100%] "
            src={"http://localhost:8000/" + food.image}
            alt=""
          />
          <div class="p-5">
            <h5 className="text-bold text-md ">{food.name}</h5>
            <span className="text-aqua mt-2 text-bold text-md ">
              Rp. {food.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListOrder;
