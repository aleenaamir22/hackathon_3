"use client";

import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import foodpic1 from "../../public/foodpic1.jpeg";
import foodpic2 from "../../public/foodpic2.jpeg";
import foodpic3 from "../../public/foodpic3.jpeg";
import heropic from "../../public/heropic.png";
import FoodCategory from "@/pages/foodcategory/page";

function HomePage() {
  return (
    <>
      <Navbar />
      <section className="bg-black px-4 md:px-20 flex flex-col md:flex-row items-center justify-between py-10 w-full">
        <div className="text-white md:w-1/2">
          <h1 className="text-orange-500 text-2xl md:text-4xl font-semibold">
            It's Quick & Amusing!
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold">
            The Art of <span className="text-orange-500">Speed</span> Food Quality
          </h2>
          <p className="text-sm md:text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
          <button className="bg-orange-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full mt-4">
            See More
          </button>
        </div>
        <div className="mt-6 md:mt-0">
          <Image
            src={require("../../public/heropic.png")}
            alt="Hero Image"
            width={700}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="bg-black px-4 md:px-20 flex flex-col md:flex-row items-center justify-between py-10">
        <div className="text-white md:w-1/2">
          <h1 className="text-orange-500 text-2xl md:text-4xl font-semibold">About Us</h1>
          <h2 className="text-3xl md:text-5xl font-bold">
            We Create the Best <span className="text-orange-500">Foody</span> Products
          </h2>
          <p className="text-sm md:text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Ultrices
            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
            consequat.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center">
              <FaCheck className="text-orange-500 mr-2" />
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-center">
              <FaCheck className="text-orange-500 mr-2" />
              Quisque diam pellentesque bibendum non dui volutpat fringilla.
            </li>
            <li className="flex items-center">
              <FaCheck className="text-orange-500 mr-2" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>
          <button className="bg-orange-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full mt-6">
            See More
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8 md:mt-0 md:grid-cols-2">
          <Image
            src={require("../../public/foodpic1.jpeg")}
            alt="Food 1"
            width={500}
            height={500}
            className="object-cover rounded-md"
          />
          <div className="grid gap-4">
            <Image
              src={require("../../public/foodpic2.jpeg")}
              alt="Food 2"
              width={250}
              height={250}
              className="object-cover rounded-md"
            />
            <Image
              src={require("../../public/foodpic3.jpeg")}
              alt="Food 3"
              width={250}
              height={250}
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </section>
      <FoodCategory/>
      <Footer />
    </>
  );
}

export default HomePage;
