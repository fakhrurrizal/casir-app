import React, {useState, Component} from 'react'
import swal from 'sweetalert';
import user from '../../assets/user.png'
import Payment from '../Modal/Payment';
import { useQuery } from "react-query";
import { API } from "../../Config/Api";

const Orders = () => {

  function showAlert() {
    swal({
      title: "Saved Bill!",
      icon: "success",
      button: "OK",
    });
  }

  const handleTransaction = () => {
    handleShow();
  };

  const { data: foods, refetch } = useQuery("foods", async () => {
    const res = await API.get("/foods");
    return res.data.foods;
  });

  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <div className="bg-white w-[26rem] h-[35rem] p-7 shadow-xl rounded-lg">
        <div className="flex justify-center  mb-4">
          <img
            src={user}
            className="w-10  border-2 border-black rounded-full"
            alt=""
          />
          <span className="mt-1 ml-3 text-[20px] font-bold">Pesanan</span>
        </div>
        <div class=" h-60 overflow-auto scrollbar-hide">
          {foods.map((foods) => (
            <div className="mb-8 flex justify-between font-bold m-auto text-sm ">
              <div className="flex ">
                <img src={"http://localhost:8000/" + foods.image} className="w-24 rounded-md" alt="" />
                <span className="ml-2 mt-7">{foods.name}</span>
              </div>
              <div className="mt-7">
                <span>x 1</span>
                <span  className="mr-3 ml-5 text-aqua ">Rp. {foods.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
            <button className="py-2 w-full text-pink active:bg-red-400  active:border-2 active:border-red-400 border-2 border-pink hover:bg-pink hover:text-white">Clear Cart</button>
        </div>
        <div className="mt-5 flex justify-between">
            <button className="px-12 py-2 text-white bg-greent active:bg-green-500" onClick={showAlert}>Save Bill</button>
            <button className="px-12 py-2 text-white bg-greent active:bg-green-500">Print Bill</button>
        </div>
        <div className="mt-5">
            <button className="py-2 w-full text-white  active:bg-sky-400 bg-aqua"  onClick={()=>{handleTransaction()}}>Charge Rp. </button>
        </div>
        <Payment 
          show={show}
          handleClose={handleClose}
        />
      </div>
  )
}

export default Orders