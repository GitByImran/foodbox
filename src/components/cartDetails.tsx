import React from "react";
import { Button } from "./ui/button";
import { CreditCard, Pin } from "lucide-react";
import { numberToWords } from "amount-to-words";

const CartDetails = ({ cartData }: any) => {
  const cartTotal = cartData?.reduce(
    (acc: number, curr: any) => acc + curr.price,
    0
  );

  return (
    <div className="max-w-3xl mx-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {cartData?.slice(0, 5).map((data: any, index: number) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {data?.name}
              </th>
              <td className="px-6 py-4 text-base">{data?.quantity}</td>
              <td className="px-6 py-4 text-base">{data?.price}</td>
              <td className="px-6 py-4 text-base">1200</td>

              {/*id name
image
price
category
description
rating
availability */}
            </tr>
          ))}
          <tr>
            <td colSpan={3} className="px-6 py-4 text-base">
              Total
            </td>
            <td colSpan={1} className="px-6 py-4 text-base font-semibold">
              12000
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-8 space-y-4">
        <p className="font-semibold text-base text-gray-600">
          You need to pay total {numberToWords(12000)} Taka only
        </p>
        <Button variant={"default"} type="button" className="text-base">
          <span className="mr-2">Safe Checkout</span> <CreditCard size={20} />
        </Button>
      </div>
    </div>
  );
};

export default CartDetails;
