import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full bg-black text-white rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src="/events/AbtCouncil.png"
          alt="Futuristic cityscape"
          className="w-full h-136 object-fill"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
          <div className="max-w-5xl mx-auto px-6 py-16 h-full flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4">THE INTENSA COUNCIL</h1>
            <p className="text-lg max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              inventore laboriosam, natus accusantium, quos id dolores porro
              praesentium recusandae dignissimos qui debitis magnam molestiae
              aliquid at adipisci? Tempora, quo aspernatur!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
