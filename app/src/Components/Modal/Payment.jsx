import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Ikan from "../../assets/ikan.png";

let data = [
  {
    name: "Bakso",
    img: Ikan,
    price: "12000",
  },
  
];

const Payment = ({ show, handleClose }) => {
  return (
    <>
      <Transition.Root appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed mt-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-sm bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-[27px] font-bold leading-6 text-gray-900"
                  >
                    Detail Pesanan
                  </Dialog.Title>
                  <div className="mt-10  flex">
                    <div>
                      <table className="w-full text-center ">
                        <thead className=" font-avanir bg-gray-200">
                          <tr>
                            <th className=" w-24 p-3 text-sm font-semibold tracking-wide ">
                              #
                            </th>
                            <th className="w-32 p-3 text-sm font-semibold tracking-wide ">
                              Nama
                            </th>
                            <th className="w-32 p-3 text-sm font-semibold tracking-wide ">
                              Foto
                            </th>
                            <th className="w-32 p-3 text-sm font-semibold tracking-wide ">
                              Harga
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-slate-100  overflow-auto">
                          {data.map((food, index) => (
                            <tr className="bg-grey delay-75 h-20 font-avanir table-auto hover:bg-gray-200 ">
                              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                {index + 1}
                              </td>
                              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                {food.name}
                              </td>
                              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <img src={food.img} alt="" className="w-20" />
                              </td>
                              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                {food.price}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="h-52 border-l border mx-7"></div>
                    <div className="justify-center ">
                      <form className="text-center mb-3">
                      <span className="font-bold text-[18px] font-avanir ">Uang Pembeli (Rp.)</span>
                        <input
                          type="number"
                          name="price"
                          class="block w-72 p-2 mt-5  text-md text-gray-900 border-2 border-gray-300 rounded-sm  focus:ring-aqua focus:border-aqua dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-aqua dark:focus:border-aqua"
                          required
                        />
                        <div className="flex justify-between mt-5">
                          <button className=" px-12 py-1 text-gray-400 font-medium rounded-sm  border-2 border-gray-300" onClick={handleClose}>Close</button>
                          <button type="submit " className="px-14 py-1 rounded-sm bg-aqua text-white" >Pay!</button>
                        </div>
                      </form>
                        <span className="text-pink font-bold text-left font-avanir">Kembalian : </span>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Payment;
