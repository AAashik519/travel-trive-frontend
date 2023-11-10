import React from "react";

const Teams = () => {
  const teams = [
    {
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Alice Smith",
      designation: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "David Brown",
      designation: "Financial Analyst",
      image:
        "https://images.unsplash.com/photo-1653157900201-7b98a214f700?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sarah Wilson",
      designation: "Graphic Designer",
      image:
        "https://images.unsplash.com/photo-1653157900180-39498ca0f955?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="lg:w-[1200px] mx-auto my-20">
      <div className="text-center my-5">
        <h3 className="text-xl text-red-600 font-bold italic">Team</h3>
        <h1 className="text-4xl text-blue-900 font-bold">Our Amazing Team</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {teams.map((team) => (
          <div className="card   shadow">
            <img className="h-[350px]" src={team.image} alt="Shoes" />

            <div className="px-3 py-3">
              <h2 className="card-title text-blue-950">{team.name}</h2>
              <p className="text-gray-700">{team.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
