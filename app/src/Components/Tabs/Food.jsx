import React, { useState } from "react";
import { IoMdAdd, IoIosArrowBack } from "react-icons/io";
import AddFood from "../List/AddFood";
import TableList from "../List/TableList";

const ListFood = () => {
  const [isAdd, setIsAdd] = useState(false);
  return (
    <div className="px-20 mt-10">
      
      {!isAdd ? (
        <span className="text-slate-400 font-avanir">
        Tambahkan menu makanan yang ada di resto
      </span>
      ):(
        ""
      )}
      <div className="mt-10 p-7 bg-white">
        {!isAdd ? (<button
          className="flex bg-aqua w-40 p-2 text-white rounded-sm active:bg-sky-600"
          onClick={() => setIsAdd(true)}
        >
          <IoMdAdd className="text-lg mt-[2px] mx-1" /> Tambah Menu
        </button>):(
          <span className="text-aqua text-lg font-bold">Tambahkan Menu</span>
        )}
        <div className=" mt-10">{!isAdd ? <TableList /> : <AddFood />}</div>
      </div>
    </div>
  );
};

export default ListFood;
