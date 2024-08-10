import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { FoodData } from "@/data/dummyData";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <section className="py-20 space-y-8" id="hero_section">
        <div className="text-center">
          <h2 className="max-w-2xl mx-auto text-center text-5xl font-bold text-primary">
            Fresh, Healthy, Tasty!
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-xl font-light text-gray-500">
            Delicious meals delivered to your doorsteps.
          </p>
          {/* <Button size={"lg"} className="mt-4 bg-primary text-base capitalize">
            order now
          </Button> */}
        </div>
        <div className="relative w-full max-w-xl mx-auto bg-white rounded-full">
          <input
            placeholder="e.g. Blog"
            className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-40 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:border-primary"
            type="text"
            name="query"
            id="query"
          />
          <button
            type="submit"
            className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-primary sm:px-6 sm:text-base sm:font-medium hover:bg-primary focus:outline-primary focus:border-primary"
          >
            <svg
              className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            Search
          </button>
        </div>
      </section>

      {/*  */}

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FoodData.map((data: any, index: number) => (
            <div
              key={index}
              className="rounded-3xl border shadow overflow-hidden"
            >
              <Link href={"/"}>
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
      </section>
    </div>
  );
};

export default HomePage;
