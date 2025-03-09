import Navbar from "../components/NavBar";
import GlitchText from "../components/GlitchText";

export default function HeroSection() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className=" absolute w-8/12 top-2 z-20">
                <Navbar />
            </div>
            <svg
                className="absolute inset-0 w-11/12 h-full place-self-center"
                viewBox="0 0 1440 876"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >

                <line x1="72" y1="26" x2="1339" y2="26" stroke="#E5A445" stroke-width="6" />
                <line x1="205" y1="67" x2="1205" y2="67" stroke="#E5A445" stroke-width="6" />
                <line x1="72" y1="848" x2="1339" y2="848" stroke="#E5A445" stroke-width="6" />
                <line x1="30" y1="276.022" x2="30" y2="74" stroke="#E5A445" stroke-width="6" />
                <line x1="30" y1="802.022" x2="30" y2="600" stroke="#E5A445" stroke-width="6" />
                <line x1="1380" y1="802.022" x2="1380" y2="600" stroke="#E5A445" stroke-width="6" />
                <line x1="109.044" y1="319.013" x2="108" y2="553.013" stroke="#E5A445" stroke-width="6" />
                <line x1="1308.04" y1="320.013" x2="1307" y2="554.013" stroke="#E5A445" stroke-width="6" />
                <line x1="1381.04" y1="74.0102" x2="1380.36" y2="276.029" stroke="#E5A445" stroke-width="6" />
                <path d="M73.5033 26.5L30.5033 75.5" stroke="#E5A445" stroke-width="6" />
                <line y1="-3" x2="65.192" y2="-3" transform="matrix(0.65959 0.751626 0.751626 -0.65959 32 799)" stroke="#E5A445" stroke-width="6" />
                <path d="M1336.5 24.9L1381.5 76" stroke="#E5A445" stroke-width="6" />
                <path d="M1381.5 801L1338.5 850" stroke="#E5A445" stroke-width="6" />
                <line x1="31.524" y1="273.416" x2="109.524" y2="319.416" stroke="#E5A445" stroke-width="6" />
                <line x1="1379.62" y1="275.522" x2="1306.62" y2="322.522" stroke="#E5A445" stroke-width="6" />
                <path d="M108 551.5L29.9844 601.277" stroke="#E5A445" stroke-width="6" />
                <path d="M1304.65 553L1382.66 602.777" stroke="#E5A445" stroke-width="6" />
                <path d="M83.5 144.8L83.5 93.2118" stroke="#E5A445" stroke-width="6" />
                <line x1="107" y1="270.022" x2="107" y2="68" stroke="#E5A445" stroke-width="6" />
                <path d="M106.3 70L82.4372 95.604" stroke="#E5A445" stroke-width="6" />
                <path d="M81.8522 142.221L108.5 159.5" stroke="#E5A445" stroke-width="6" />
                <path d="M104 76.5L86 95L85 142.5L104 155.5V76.5Z" fill="#E5A445" stroke="#E5A445" />
                <path d="M83.5 719.2L83.5 770.788" stroke="#E5A445" stroke-width="6" />
                <line y1="-3" x2="202.022" y2="-3" transform="matrix(0 1 1 0 110 593.978)" stroke="#E5A445" stroke-width="6" />
                <path d="M106.3 794L82.4372 768.396" stroke="#E5A445" stroke-width="6" />
                <path d="M81.8522 721.779L108.5 704.5" stroke="#E5A445" stroke-width="6" />
                <path d="M104 787.5L86 769L85 721.5L104 708.5V787.5Z" fill="#E5A445" stroke="#E5A445" />
                <path d="M1327.5 148.8L1327.5 97.2118" stroke="#E5A445" stroke-width="6" />
                <line y1="-3" x2="202.022" y2="-3" transform="matrix(0 -1 -1 0 1301 274.022)" stroke="#E5A445" stroke-width="6" />
                <path d="M1304.7 74L1328.56 99.604" stroke="#E5A445" stroke-width="6" />
                <path d="M1329.15 146.221L1302.5 163.5" stroke="#E5A445" stroke-width="6" />
                <path d="M1307 80.5L1325 99L1326 146.5L1307 159.5V80.5Z" fill="#E5A445" stroke="#E5A445" />
                <path d="M1327.5 731.2L1327.5 782.788" stroke="#E5A445" stroke-width="6" />
                <line x1="1304" y1="605.978" x2="1304" y2="808" stroke="#E5A445" stroke-width="6" />
                <path d="M1304.7 806L1328.56 780.396" stroke="#E5A445" stroke-width="6" />
                <path d="M1329.15 733.779L1302.5 716.5" stroke="#E5A445" stroke-width="6" />
                <path d="M1307 799.5L1325 781L1326 733.5L1307 720.5V799.5Z" fill="#E5A445" stroke="#E5A445" />
                <path d="M76.5 29H1337.5L1209 70.5341H204L76.5 29Z" fill="#E5A445" stroke="#E5A445" />
            </svg>

            <div className="w-full h-auto flex flex-col justify-center items-center">
                <h1 className="font-['Press_Start_2P'] text-[#E5A445] font-outline-1 text-2xl sm:text-4xl md:text-6xl pb-5 sm:pb-8 md:pb-10 text-shadow-amber"><GlitchText text={"TECHFLUENCE"} /></h1>
                <div className="flex flex-col md:flex-row justify-between w-8/12 h-auto space-x-5">
                    <img src="/main/main1.png" alt="image" className="h-52 md:h-96 w-full sm:w-auto object-fill" />
                    <div className="flex flex-col items-center justify-center font-['Press_Start_2P'] text-[#E5A445] text-shadow-yellow pb-8 sm:pb-16 md:pb-28">
                        <h1 className="text-center text-lg sm:text-xl md:text-2xl font-bold pb-4 sm:pb-10 md:pb-16">Retro Futurism</h1>
                        <p className="text-center text-sm sm:text-lg tracking-wider">Where Tommarrow's Ideas Take Shape</p>
                    </div>
                    <img src="/main/main2.png" alt="image" className="h-52 md:h-96 w-full sm:w-auto object-fill" />
                </div>
            </div>
        </div>
    )
}