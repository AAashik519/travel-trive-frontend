import React from "react";
import travel from "../../assets/travel.jpeg";
const AboutUsSelect = () => {
  return (
    <div className="my-20 md:w-full lg:w-[1200px] mx-auto">
      <div className="lg:flex gap-20   ">
        <div className="flex-1">
          <img
            src="https://media.istockphoto.com/id/1363398400/photo/woman-traveler-in-europa-alhambra-in-spain.jpg?s=612x612&w=0&k=20&c=Z14eQ_IJywp7COkEQvAhxhiOagmqupQaO_RuRg5kEzM="
            alt=""
            className="md:w-full"
          />
        </div>
        <div className="flex-1 space-y-5">
          <h3 className="text-2xl text-red-600 italic font-bold">About Us</h3>
          <h1 className="text-4xl font-bold text-blue-950">
            Why Selese Us for Your Vacation
          </h1>
          <p className="text-gray-500 text-justify ">
            Travel is a transformative experience that allows individuals to
            explore new horizons, cultures, and landscapes. It's a journey of
            self-discovery, adventure, and enrichment. Whether you're embarking
            on a solo expedition, a family vacation, or a romantic getaway,
            travel opens doors to exciting possibilities. It's a chance to savor
            diverse cuisines, witness breathtaking natural wonders, and engage
            with people from different backgrounds.
          </p>
          <p className="mt-5 text-gray-500">
            It broadens perspectives, fosters cultural understanding, and
            provides a break from the everyday to rejuvenate the mind and
            spirit. Travel is not just about the destinations;
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSelect;
