import React,{useEffect, useState} from "react";
import { API } from "../../Config/Api";
import { useMutation, useQuery } from "react-query";
import Delete from "../Modal/Delete";
import Notdata from "../Error/Notdata";

const TableList = () => {

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [idDelete, setIdDelete] = useState(null)
  const [confirmDelete, setConfirmDelete] = useState(null)
  const [IdName, setIdName] = useState(null)

  const { data: foods, refetch } = useQuery("foods", async () => {
    const res = await API.get("/foods");
    return res.data.foods;
  });


  // Menampilkan modal delete 
  const handleDelete = (id, price) => {
    setIdDelete(id)
    setIdName(price)
    handleShow()
  }

  // Mengahapus data berdasarkan ID
  const deleteById = useMutation(async (id) => {
    try {
      await API.delete(`/foods/${id}`)
      refetch()
    } catch (error) {
      console.log(error)
    }
  })

  useEffect(() => {
    if (confirmDelete) {
      handleClose()
      deleteById.mutate(idDelete)
      setConfirmDelete(null)
    }
  }, [confirmDelete])

  return (
    <div>
      {foods?.length > 0 ? (
        <table className="w-full">
        <thead className=" font-avanir bg-gray-200  text-left">
          <tr>
            <th className=" w-18 p-3 text-sm font-semibold tracking-wide ">
              #
            </th>
            <th className="w-18 p-3 text-sm font-semibold tracking-wide ">
              Nama
            </th>
            <th className="w-18 p-3 text-sm font-semibold tracking-wide ">
              Foto
            </th>
            <th className="w-18 p-3 text-sm font-semibold tracking-wide ">
              Harga
            </th>
            <th className="w-18 p-3 text-sm font-semibold tracking-wide ">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-left">
          {foods?.map((food, index) => (
            <tr className="bg-grey delay-75 font-avanir ">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{index + 1}</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{food.name}</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><img src={"http://localhost:8000/"+food.image} alt="" className="w-20 rounded-md"/></td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Rp.{food.price}</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer" onClick={() => {
                  handleDelete(food?.id, food?.id_register)
                }}>
                Hapus
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      ): <Notdata/>}
      <Delete 
        setConfirmDelete={setConfirmDelete}
        show={show}
        handleClose={handleClose}
        data={IdName} 
      />
    </div>
  );
};

export default TableList;
