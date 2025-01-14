import React from "react";

function page() {
  function formatMoney(value: number): string {
    const formated: string = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "IDR",
    }).format(value);

    return formated;
  }

  return (
    <div className="flex flex-col p-6 gap-4">
      <div className="flex flex-col ">
        <h1 className="font-bold text-2xl text-primary">Welcome Back, User!</h1>
        <h2 className="text-subText">Manage your personal finance here</h2>
      </div>
      <div className="flex flex-row gap-4">
        <div className="border border-gray-400 flex flex-col gap-10 p-4 min-w-60 rounded-2xl">
          <h3 className="font-semibold text-base">Total Savings</h3>
          <p className="font-bold text-2xl">{formatMoney(12000000)}</p>
        </div>

        <div className="border border-gray-400 flex flex-col gap-10 p-4 min-w-60 rounded-2xl">
          <h3 className="font-semibold text-base">Income</h3>
          <p className="font-bold text-2xl">{formatMoney(5000000)}</p>
        </div>

        <div className="border border-gray-400 flex flex-col gap-10 p-4 min-w-60 rounded-2xl">
          <h3 className="font-semibold text-base">Expense</h3>
          <p className="font-bold text-2xl">{formatMoney(2500000)}</p>
        </div>
      </div>

        
    </div>
  );
}

export default page;
