import React from "react";
import CartDetails from "@/components/cartDetails";
import { FoodData } from "@/data/dummyData";

const CartPage = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <CartDetails cartData={FoodData} />
    </div>
  );
};

export default CartPage;
