import { notFound } from "next/navigation";
import Image from "next/image";
import { FoodData } from "@/data/dummyData";
import FoodItemDetailsCard from "@/components/FoodItemDetailsCard";

// Function to fetch food data by id
async function getFood(id: any) {
  const food = FoodData.find((food) => food.id === parseInt(id, 10));
  if (!food) {
    notFound();
  }
  return food;
}

const FoodDetails = async ({ params }: any) => {
  const { id } = params;
  const food = await getFood(id);

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <FoodItemDetailsCard food={food} />
    </div>
  );
};

export default FoodDetails;
