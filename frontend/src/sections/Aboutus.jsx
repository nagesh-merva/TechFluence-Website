import GlitchText from "../components/GlitchText"
import HeaderText from "../components/main/Headertext"

export default function Aboutus() {

    return (
        <div className="w-full h-auto ">
            <HeaderText heading={"About Us"} />
            <div className="mx-5">
                <div className="my-8  sm:my-12 md:my-20 p-4 sm:p-6 md:p-8 w-full sm:w-10/12 md:w-8/12 bg-white/15 rounded-2xl place-self-center">
                    <p className=" text-[#dfab5b] font-semibold text-center text-xl sm:text-3xl tracking-wider leading-8 sm:leading-10 md:leading-14"><GlitchText text={"Techfluence is a celebration of cultures and technology, not just as an institution, but as a country. It aims at instilling a sense of belongingness by being a melting pot of ideas open to students of all disciplines. With intriguing events and competitions along with resourceful workshops by experts and professionals, Techfluence ‘25 is all set to be an enthralling experience for everyone involved."} /></p>
                </div>
                <div className="hidden md:block"><div className="w-full flex flex-col "><HeaderText heading={""} /><a href="/events" className="border-rotate bg-white/15 w-2/6 text-center py-2 text-[#dfab5b] font-semibold text-lg sm:text-2xl md:text-4xl -mt-14 rounded-xl place-self-center"> view all events</a></div></div>
                <div className=" md:hidden flex justify-center w-full py-16"><a href="/events" className=" border-rotate bg-white/35 w-4/6 h-fit text-center py-2 text-[#dfab5b] font-semibold text-lg sm:text-2xl md:text-4xl -mt-14 rounded-xl place-self-center"> view all events</a></div>
            </div>
        </div>
    )
}