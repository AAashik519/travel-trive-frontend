import React, { useEffect, useState } from "react";

import useAuth from "../../hooks/useAuth";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const { user, isLoading } = useAuth();

  console.log(user.email);
  if(isLoading){
    return <progress className="progress w-56"></progress>
  }
  const URL = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        
        console.log(data);
        setBookings(data);
      });
  }, [URL]);

  return (
    <div>
      <div className=" mx-auto w-screen max-w-5xl my-10">
        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
              <div className="text-lg font-medium text-gray-900">
                Shopping cart
              </div>
            </div>

            <div className="mt-8">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {bookings.map((booking) => (
                  <li key={booking.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={booking.loadCountry.imageURL}
                        alt={booking.image}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="  text-base font-medium text-gray-900">
                          <h3>
                            <a href={booking.href}>{booking.loadCountry.country}</a>
                          </h3>
                          <p className=" ">{booking.loadCountry.abbreviation}</p>
                        </div>
                      </div>
                      <div className="  text-sm">
                      <p className="text-gray-500 font-semibold mt-2">
                          {" "}
                          { booking.loadCountry.officialLanguages }
                        </p>
                        <p className="text-gray-500 font-semibold">
                          {" "}
                          { booking.loadCountry.description }
                        </p>
                       
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
