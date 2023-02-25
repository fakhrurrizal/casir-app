import { useState } from "react";
import { Tab } from "@headlessui/react";
import ListFood from "../Tabs/Food";
import Transaction from "../Tabs/Transaction";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Tabs() {
  let tab = ["Food", "Transaction"];

  return (
    <div className="w-screen  sm:px-0">
      <Tab.Group>
        <Tab.List className=" flex  bg-white px-20">
          {tab.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  " w-36 py-3 text-sm font-medium font-avanir",
                  "ring-white ring-opacity-60  ring-offset-blue-400",
                  selected
                    ? "text-aqua outline-none font-bold border-aqua border-b-2"
                    : "text-black outline-none border-white font-bold border-b-2"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <ListFood />
          </Tab.Panel>
          <Tab.Panel>
              <Transaction />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Tabs;
