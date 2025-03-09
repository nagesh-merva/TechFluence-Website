import GlitchText from "../components/GlitchText";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Sponsors() {
    const Sponsors = [
        { name: "sponsor1", img: "/sponsors/image.png" },
        { name: "sponsor2", img: "/sponsors/image.png" },
        { name: "sponsor3", img: "/sponsors/image.png" },
        { name: "sponsor4", img: "/sponsors/image.png" },
        { name: "sponsor5", img: "/sponsors/image.png" },
        { name: "sponsor6", img: "/sponsors/image.png" }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    };

    return (
        <div className="w-full h-auto flex flex-col items-center justify-center">
            <h1 className="font-['Press_Start_2P'] w-fit text-center leading-8 sm:leading-14 text-[#E5A445] font-outline sm:font-outline-1 text-2xl sm:text-3xl md:text-4xl">
                <GlitchText text={"Esteemed Sponsors"} />
            </h1>
            <div className="relative mt-10 py-8 sm:py-10 md:py-16 w-full h-36 sm:h-86 sm:w-10/12 flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 1289 394" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute z-20 inset-0">
                    <path d="M1163.17 4.46562H24.3561V4.85069L27.5776 6.39096H28.383H1137.39L1143.03 9.08644H1246.12L1269.48 20.2534V113.295L1273.5 115.365V383.574H1157.9L1145.45 377.212H1133.37L1145.45 383.574H1128.53L1116.45 377.212H1104.37L1116.7 383.574H1100.08L1087.46 377.212H1075.38L1087.46 383.574H1071.56L1058.47 377.212H1046.39L1058.87 383.574H1042.36L1029.47 377.212H1017.39L1030.01 383.574H1013.88L1000.48 377.212H989.203L1000.9 383.574H984.371L971.485 377.212H441.822L428.658 381.833H217.896L177.379 372.976H83.1489L50.9337 349.798V277.717H35.3542L35.6314 81.4794L28.383 74.1631V6.39096H27.5776L24.3561 4.85069L23.5507 324.073L1 334.855V372.976L23.5507 393H83.1489L100.062 385.684H171.741L208.788 393L1145.45 392.615L1160.75 385.299H1277.53V60.3006H1288V10.2417L1268.67 1H1176.86L1163.17 4.46562Z" fill="#E5A445" />
                    <path d="M24.3561 4.85069L23.5507 324.073L1 334.855V372.976L23.5507 393H83.1489L100.062 385.684H171.741L208.788 393L1145.45 392.615L1160.75 385.299H1277.53V60.3006H1288V10.2417L1268.67 1H1176.86L1163.17 4.46562H24.3561V4.85069ZM24.3561 4.85069L27.5776 6.39096H28.383M24.3561 4.85069V4.08055M28.383 6.39096H1137.39L1143.03 9.08644H1246.12L1269.48 20.2534V113.295L1273.5 115.365V383.574H1157.9L1145.45 377.212H1133.37L1145.45 383.574H1128.53L1116.45 377.212H1104.37L1116.7 383.574H1100.08L1087.46 377.212H1075.38L1087.46 383.574H1071.56L1058.47 377.212H1046.39L1058.87 383.574H1042.36L1029.47 377.212H1017.39L1030.01 383.574H1013.88L1000.48 377.212H989.203L1000.9 383.574H984.371L971.485 377.212H441.822L428.658 381.833H217.896L177.379 372.976H83.1489L50.9337 349.798V277.717H35.3542L35.6314 81.4794L28.383 74.1631V6.39096Z" stroke="#E5A445" />
                </svg>
                <Slider {...settings} className="w-10/12 place-self-center" >
                    {Sponsors.map((sponsor, index) => (
                        <div key={index} className="px-2 h-24 md:h-[270px]">
                            <img src={sponsor.img} alt={sponsor.name} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
