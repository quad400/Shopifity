import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosTrendingUp } from "react-icons/io";
import { Naira } from "../../utils";

const Dashboard = () => {
  return (
    <div className="h-full w-full">
      <h4 className="text-2xl font-bold text-black">Dashboard</h4>
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-white shadow-md px-3 py-4">
          <div className="flex justify-between items-center">
            <p className="text-[10px] text-gray-200 font-normal">Total sells</p>
            <HiDotsVertical color="gray" />
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-2xl text-black font-semibold">{Naira.format(29000)}</p>
            <div>
              <div className="flex justify-center items-center">
                <IoIosTrendingUp color="green" size={10} />
                <p className="text-green-400 text-[10px]">23.7%</p>
              </div>
              <p className="text-[10px] text-gray-200 font-normal">Compare to July, 2023</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md px-3 py-4">
          <div className="flex justify-between items-center">
            <p className="text-[10px] text-gray-200 font-normal">Average Order value</p>
            <HiDotsVertical color="gray" />
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-2xl text-black font-semibold">{Naira.format(290)}</p>
            <div>
              <div className="flex justify-center items-center">
                <IoIosTrendingUp color="green" size={10} />
                <p className="text-green-400 text-[10px]">23.7%</p>
              </div>
              <p className="text-[10px] text-gray-200 font-normal">Compare to July, 2023</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md px-3 py-4">
          <div className="flex justify-between items-center">
            <p className="text-[10px] text-gray-200 font-normal">Total Orders</p>
            <HiDotsVertical color="gray" />
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-2xl text-black font-semibold">100</p>
            <div>
              <div className="flex justify-center items-center">
                <IoIosTrendingUp color="green" size={10} />
                <p className="text-green-400 text-[10px]">23.7%</p>
              </div>
              <p className="text-[10px] text-gray-200 font-normal">Compare to July, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
