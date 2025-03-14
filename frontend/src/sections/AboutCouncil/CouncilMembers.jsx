import React from "react";

const CouncilMembers = () => {
  // Member details array with 18 council members
  const memberDetails = [
    {
      img: "/events/Anurag.jpg",
      name: "Anurag Singh",
      designation: "Chairman",
    },
    {
      img: "/events/Shivam.jpeg",
      name: "Shivam Shirodkar",
      designation: "General Secretary",
    },
    {
      img: "/events/Yash.jpg",
      name: "Yash Gaonkar",
      designation: "Treasurer",
    },
    {
      img: "/events/Raj.jpeg",
      name: "Raj Shirodkar",
      designation: "Cultural Executive",
    },
    {
      img: "/events/Onkar.jpeg",
      name: "Onkar Govekar",
      designation: "Talent Executive",
    },
    {
      img: "/events/Sidhant.jpeg",
      name: "Sidhant Naik",
      designation: "Technical Secretary",
    },

    {
      img: "/events/Bhavi.jpeg",
      name: "Bhavi Naik",
      designation: "Placement Executive",
    },
    {
      img: "/events/Ritesh.jpeg",
      name: "Ritesh Naik",
      designation: "Event Executive",
    },

    {
      img: "/events/Meher.jpeg",
      name: "Meher Aga",
      designation: "Magazine Executive",
    },
    {
      img: "/events/Sahil.jpeg",
      name: "Sahil Kumar",
      designation: "Sports Evecutive",
    },
    {
      img: "/events/Brisen.jpeg",
      name: "Brisen Whyte",
      designation: "BE Executive",
    },
    {
      img: "/events/Atharv.jpeg",
      name: "Atharv Desai ",
      designation: "BE Executive",
    },
    {
      img: "/events/Tanmay.jpeg",
      name: "Tanmay Gawas",
      designation: "TE Executive",
    },
    {
      img: "/events/Maithili.jpeg",
      name: "Maithili Chavan",
      designation: "TE Executive",
    },
    {
      img: "/images/members/alex-chen.jpg",
      name: "Alex Chen",
      designation: "Security Expert",
    },
    {
      img: "/images/members/hannah-clarke.jpg",
      name: "Hannah Clarke",
      designation: "Ecosystem Developer",
    },
    {
      img: "/images/members/marcus-bennett.jpg",
      name: "Marcus Bennett",
      designation: "Token Economist",
    },
    {
      img: "/images/members/victoria-lopez.jpg",
      name: "Victoria Lopez",
      designation: "Marketing Director",
    },
  ];

  return (
    <div className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Council Members</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
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
