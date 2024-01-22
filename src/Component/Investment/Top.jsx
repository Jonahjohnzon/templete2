import React, { useState } from "react";
import PriceTab from "./PriceTab";
import Sample from "./Sample";

const Top = () => {
  const [pos, setPos] = useState(true);
  const [select, setselect] = useState(1);
  const MonthlyInfo = [
    {
      title: "Basic",
      price: 6.00,
      period: "month",
      data: ["Basic support", "Up to 5GB per month"],
    },
    {
      title: "Standard",
      price: 8.00,
      period: "month",
      data: ["24h support", "Up to 10GB per month"],
    },
    {
      title: "Premium",
      price: 12.00,
      period: "month",
      data: [
        "Priority 24h support",
        "Unlimited storage",
        "AI security monitoring",
      ],
    },
  ];
  const YearlyInfo = [
    {
      title: "Basic",
      price: 57.60,
      period: "year",
      old:72.00,
      data: ["Basic support", "Up to 5GB per month"],
    },
    {
      title: "Standard",
      price: 76.0,
      period: "year",
      old:90.00,
      data: ["24h support", "Up to 10GB per month"],
    },
    {
      title: "Premium",
      price: 115.20,
      old:144.00,
      period: "year",
      data: [
        "Priority 24h support",
        "Unlimited storage",
        "AI security monitoring",
      ],
    },
  ];
  return (
    <div className=" w-full bg-green py-20 text-metal flex-col items-center  pt-40 flex justify-center">
      <div className=" w-[90%] xl:w-[70%] 2xl:w-[50%] flex flex-col items-center mb-16">
        <main className=" flex flex-col items-center">
          <h1 className=" font-bold font-Black text-5xl text-center lg:text-6xl mb-20">
            Your Investment
          </h1>
          <h3 className=" font-bold text-2xl  lg:text-3xl mb-10">Packages</h3>
          <div className=" flex items-center  cursor-pointer relative bg-[#0D3A3E] mb-4  hover:bg-[#194349] rounded-md overflow-hidden">
            <div
              className=" absolute z-20 bg-metal h-full top-0  rounded-md transition-all ease-in-out duration-300"
              style={
                pos
                  ? { left: "0%", width: "40%" }
                  : { left: "40%", width: "60%" }
              }
            ></div>
            <section
              className="  px-3 flex items-center rounded-md py-4 text-lg font-bold text-green relative z-30"
              style={pos ? { color: "#002F31" } : { color: "#F6F3E9" }}
              onClick={() => setPos(true)}
            >
              Monthly
              <div className={` m-2 h-2 w-2 transition-all duration-500 ${pos||"bg-midnight"} rounded-full`}></div>
            </section>
            <section
              className="  px-3 rounded-md py-4 text-lg  font-bold text-green  relative z-30"
              onClick={() => {
                setPos(false);
              }}
              style={pos ? { color: "#F6F3E9" } : { color: "#002F31" }}
            >
              Yearly{" "}
              <span className=" ml-2 bg-[#ACE08F] text-xs px-3 py-2 rounded-md text-green font-bold">
                20% OFF
              </span>
            </section>
          </div>
        </main>
      </div>
      <div className=" flex flex-col sm:flex-row items-center  justify-between w-[90%] xl:w-[70%] 2xl:w-[50%] mb-20">
        {pos&&MonthlyInfo.map((e, i) => {
          return (
            <div key={i} className=" w-full  mb-20 sm:mb-0">
            
              <PriceTab data={e} i={i} select={select} setselect={setselect} />
            </div>
          );
        })}
          {pos||YearlyInfo.map((e, i) => {
          return (
            <div key={i} className=" w-full  mb-20 sm:mb-0">
            
              <PriceTab data={e} i={i} select={select} setselect={setselect} />
            </div>
          );
        })}
      </div>
      <div className=" w-[90%] xl:w-[70%] 2xl:w-[50%] ">
            <Sample/>
      </div>
    </div>
  );
};

export default Top;
