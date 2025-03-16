import React from "react";

const CouncilMembers = () => {
  // Member details array with 18 council members
  const memberDetails = [
    {
      img: "/about/Anurag.jpg",
      name: "Anurag Singh",
      designation: "Chairman",
    },
    {
      img: "/about/Shivam.jpeg",
      name: "Shivam Shirodkar",
      designation: "General Secretary",
    },
    {
      img: "/about/Yash.jpg",
      name: "Yash Gaonkar",
      designation: "Treasurer",
    },
    {
      img: "/about/Raj.jpeg",
      name: "Raj Shirodkar",
      designation: "Cultural Executive",
    },
    {
      img: "/about/Onkar.jpeg",
      name: "Onkar Govekar",
      designation: "Talent Executive",
    },
    {
      img: "/about/Sidhant.jpeg",
      name: "Sidhant Naik",
      designation: "Technical Secretary",
    },

    {
      img: "/about/Bhavi.jpeg",
      name: "Bhavi Naik",
      designation: "Placement Executive",
    },
    {
      img: "/about/Ritesh.jpeg",
      name: "Ritesh Naik",
      designation: "Event Executive",
    },

    {
      img: "/about/Meher.jpeg",
      name: "Meher Aga",
      designation: "Magazine Executive",
    },
    {
      img: "/about/Sahil.jpeg",
      name: "Sahil Kumar",
      designation: "Sports Evecutive",
    },
    {
      img: "/about/Brisen.jpeg",
      name: "Brisen Whyte",
      designation: "BE Executive",
    },
    {
      img: "/about/Atharv.jpeg",
      name: "Atharv Desai ",
      designation: "BE Executive",
    },
    {
      img: "/about/Tanmay.jpeg",
      name: "Tanmay Gawas",
      designation: "TE Executive",
    },
    {
      img: "/about/Maithili.jpeg",
      name: "Maithili Chavan",
      designation: "TE Executive",
    },
    {
      img: "/about/Aditya.jpg",
      name: "Aditiya Vernekar",
      designation: "SE Executive",
    },
    {
      img: "/about/Noel.jpeg",
      name: "Noel D'Costa",
      designation: "SE Executive",
    },

    {
      img: "/about/Priyam.jpg",
      name: "Priyam Redkar",
      designation: "FE Executive",
    },
    {
      img: "/about/Goraksh.jpeg",
      name: "Goraksh Rasaikar",
      designation: "FE Executive",
    },
  ];

  return (
    <div className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Council Members</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {memberDetails.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-center">{member.name}</h3>
              <p className="text-sm text-gray-400 text-center mt-1">
                {member.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CouncilMembers;
