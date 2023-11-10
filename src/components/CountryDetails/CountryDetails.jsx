import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const CountryDetails = () => {
  const { user } = useAuth();
  const loadCountry = useLoaderData();
  const navigate = useNavigate();
  console.log(loadCountry);
  const {
    abbreviation,
    capital,
    country,
    description,
    imageURL,
    largestCity,
    officialLanguages,
  } = loadCountry;

  const handleBooking = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const area = form.area.value;
    const date = form.date.value;
    const contact = form.contact.value;

    const bookings = {
      loadCountry,
      email,
      area,
      date,
      contact,
    };
    console.log(bookings);

    try {
      const res = await axios.post("http://localhost:5000/bookings", bookings, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const toastId = toast.loading("Loading...!");
      if (res.data.acknowledged) {
        toast.success("Booking successfully ,We will Contact You", {
          id: toastId,
        });
      }
      form.reset();
      navigate("/");
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };
  return (
    <div className="lg:w-[1200px] mx-auto mt-10 mb-20">
      <div className="lg:flex gap-6 px-5">
        <div className="flex-1 ">
          <img className="w-full h-[300px]" src={imageURL} alt="" />
          <div className="mt-5">
            <h2 className="text-3xl font-bold text-blue-950">About </h2>
            <p className="text-lg mt-5 text-gray-500">
              {description} {description}
            </p>
          </div>
        </div>

        <div className="mt-3 flex-1">
          <h1 className="text-3xl text-blue-950 font-semibold">
            {" "}
            Basic Information
          </h1>
          <div>
            <div className="flex flex-col">
              <div className="lg:overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block lg:min-w-[700px] py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className=" lg:min-w-full text-left text-sm font-light">
                      <tbody>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-bold ">
                            Country
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-bold">
                            {country}
                          </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-bold ">
                            Abbreviation
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-bold">
                            {abbreviation}
                          </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-bold ">
                            Language
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-bold">
                            {officialLanguages}
                          </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-bold ">
                            Capital
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-bold">
                            {capital}
                          </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-bold ">
                            LargestCity
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-bold ">
                            {largestCity}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 px-5">
        <h1 className="text-2xl font-bold">
        
          Are You Interest to travel ,{" "}
          <span className="text-red-600 italic"> {country}</span>{" "}
        </h1>

        <form onSubmit={handleBooking} >
          <div className=" lg:flex mb-5  gap-10 ">
            <div className="form-control md:w-1/2  mt-10">
              <label className="label">
                <span className="label-text text-xl font-medium">
                  Your Email
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Your Email"
                  name="email"
                  defaultValue={user?.email}
                  disabled
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 mt-10">
              <label className="label">
                <span className="label-text text-xl font-medium">
                  Visit Area in {abbreviation}
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Enter Your Visit Area"
                  name="area"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className=" lg:flex   gap-10 mb-5 ">
            <div className="form-control md:w-1/2 mt-10 ">
              <label className="label">
                <span className="label-text text-xl font-medium"> Date </span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  placeholder="Date "
                  required
                  name="date"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 mt-10 ">
              <label className="label">
                <span className="label-text text-xl font-medium">
                  Enter Your Contact Number
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Your Contact Number"
                  name="contact"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <input
              type="submit"
              value="Booking"
              className="btn  btn-primary w-[300px]  "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CountryDetails;
