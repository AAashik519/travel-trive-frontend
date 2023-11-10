import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);
  return (
    <div className="  bg-[#e9ebee] py-20 px-5">
      <div className="text-center my-10">
        <h1 className="text-xl font-bold text-red-600 italic">Tour</h1>
        <h2 className="text-3xl font-bold text-blue-950 italic ">Features Tour</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:w-[1200px] mx-auto">
        {countries.map(({ _id, imageURL, country }) => (
          <Link to={`countries/${_id}`} key={_id}>
            <div className="card card-compact   ">
              <img className="h-[200px] rounded" src={imageURL} alt="Shoes" />
              <h2 className="text-lg text-blue-800 text-center font-bold ">
                {country}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Countries;
