import React from 'react';

const Schedule = () => {
    return (
        <div className="schedule-container p-6 mb-10 ">
            <div className=" z-30 w-full h-fit py-12 flex justify-center items-center">
                <h1 className="pointer-events-none font-big-noodle whitespace-pre-wrap bg-gradient-to-br from-white via-gray-400/85 to-gray-300/80 bg-clip-text text-center text-6xl md:text-8xl font-semibold leading-none text-transparent">
                    Events Schedule
                </h1>
            </div>
            <div className="schedule-images grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="schedule-image text-center">
                    <img className="w-full h-auto rounded-lg shadow-md" src="/schedule/day_1.jpg" alt="Day 1 Schedule" />
                    <p className="mt-2 text-lg font-medium">Day 1</p>
                </div>
                <div className="schedule-image text-center">
                    <img className="w-full h-auto rounded-lg shadow-md" src="/schedule/day_2.jpg" alt="Day 2 Schedule" />
                    <p className="mt-2 text-lg font-medium">Day 2</p>
                </div>
            </div>
        </div>
    );
};

export default Schedule;