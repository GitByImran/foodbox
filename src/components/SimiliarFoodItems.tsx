"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { FoodData } from "@/data/dummyData";
import Link from "next/link";
import { Plus } from "lucide-react";

interface Food {
  id: number;
  image: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  availability: boolean;
  price: number;
}

interface SimiliarFoodItemsProps {
  currentFoodId: number;
  currentFoodCategory: string;
}

const SimiliarFoodItems: React.FC<SimiliarFoodItemsProps> = ({
  currentFoodId,
  currentFoodCategory,
}) => {
  useEffect(() => {}, [currentFoodId, currentFoodCategory]);

  const moreFoodsFromSimiliarCategory = FoodData?.filter(
    (food) => food.category === currentFoodCategory
  );

  const similarFoods = moreFoodsFromSimiliarCategory?.filter(
    (food) => food.id !== currentFoodId
  );

  console.log("similarFoods:", similarFoods);

  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {similarFoods.map((data: any, index: number) => (
        <div key={index} className="rounded-3xl border shadow overflow-hidden">
          <Link href={`/food-items/${data?.id}`}>
            <img
              src={data?.image}
              alt=""
              className="w-full h-60 object-cover"
            />
          </Link>
          <div className="mx-4 my-4">
            <h2 className="text-base font-bold">{data?.name}</h2>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xl font-bold">
                <span className="mr-1 text-sm font-normal">$</span>
                {data?.price}
              </p>
              <button className="rounded-full bg-primary text-white p-1">
                <Plus size={16} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimiliarFoodItems;
