import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import {
  Check,
  CreditCard,
  ShoppingCart,
  Tag,
  X,
  CheckCheck,
} from "lucide-react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SimiliarFoodItems from "./SimiliarFoodItems";

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

interface FoodItemDetailsCardProps {
  food: Food;
}

const FoodItemDetailsCard: React.FC<FoodItemDetailsCardProps> = ({ food }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src={food.image}
          alt={food.name}
          width={400}
          height={300}
          className="w-full md:w-1/2 max-h-96 object-cover rounded-3xl"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{food.name}</h1>
          <p className="text-gray-600 mb-4">{food.description}</p>
          <p className="text-base text-gray-600 font-semibold mb-2 flex items-center gap-2">
            <Tag size={16} />
            <span>{food.category}</span>
          </p>
          <p
            className={`${
              food.availability ? "text-primary" : "text-secondary"
            } text-base font-semibold mb-2 flex items-center gap-2`}
          >
            {food.availability ? (
              <>
                <Check size={16} />
                Available
              </>
            ) : (
              <>
                <X size={16} />
                Out of Stock
              </>
            )}
          </p>
          <div className="mb-4">
            <Rating style={{ maxWidth: 100 }} value={food.rating} readOnly />
          </div>
          <p className="text-2xl font-semibold mb-2">$ {food.price}</p>
          <div className="mt-4 space-x-2">
            <Button className="text-base bg-primary hover:bg-secondary-foreground space-x-2">
              <ShoppingCart size={16} strokeWidth={3} />
              <span>Add to Cart</span>
            </Button>
            <Button className="text-base bg-secondary hover:bg-secondary-foreground space-x-2">
              <CreditCard size={16} strokeWidth={3} />
              <span>Buy Now</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <p className="flex items-center gap-2">
            <CheckCheck size={16} className="text-green-600" />
            <span>Guaranteed delivery within the promised time frame</span>
          </p>
          <p className="flex items-center gap-2">
            <CheckCheck size={16} className="text-green-600" />
            <span>Fresh and pure ingredients, ensuring top quality</span>
          </p>
          <p className="flex items-center gap-2">
            <CheckCheck size={16} className="text-green-600" />
            <span>Exceptional customer service to assist you anytime</span>
          </p>
          <p className="flex items-center gap-2">
            <CheckCheck size={16} className="text-green-600" />
            <span>Competitive pricing without compromising on quality</span>
          </p>
          <p className="flex items-center gap-2">
            <CheckCheck size={16} className="text-green-600" />
            <span>Environmentally friendly packaging</span>
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-secondary">
            Have a coupon code!
          </h2>
          <form className="mt-4 flex flex-wrap items-center gap-4">
            <input
              type="text"
              placeholder="Enter the code"
              className="border px-8 py-3"
            />
            <button className="px-8 py-3 text-base font-semibold text-white bg-primary border border-primary hover:bg-black hover:border-black">
              Get Discount
            </button>
          </form>
        </div>
      </div>
      <div>
        <h2 className="text-secondary text-2xl font-semibold">
          Get similar foods
        </h2>
        <SimiliarFoodItems
          currentFoodId={food.id}
          currentFoodCategory={food.category}
        />
      </div>
    </div>
  );
};

export default FoodItemDetailsCard;
