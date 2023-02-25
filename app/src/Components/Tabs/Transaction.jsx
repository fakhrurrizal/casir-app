import React from "react";
import ListOrder from "../Cart/ListOrder";
import Orders from "../Cart/Order";



const Transaction = () => {
  return (
    <div className=" px-20 mt-10 flex justify-between">
        <ListOrder />
        <Orders />
    </div>
  );
};

export default Transaction;
