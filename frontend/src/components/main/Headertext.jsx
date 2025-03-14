import GlitchText from "../GlitchText"

const HeaderText = ({ heading }) => {
    return (
        <div className="w-full flex justify-between items-center">
            <svg width="427" height="86" viewBox="0 0 427 86" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                <path d="M408 69H250M250 69H28.5L4 18H29L46 51.3462L241 50.3654L250 69Z" stroke="#E5A445" stroke-width="4" />
                <circle cx="9.5" cy="9.5" r="9.5" transform="matrix(-1 0 0 1 427 59)" fill="#E5A445" />
            </svg>
            <h1 className="font-['Press_Start_2P'] text-center text-[#E5A445] font-outline-1 text-2xl sm:text-4xl md:text-6xl text-shadow-amber"><GlitchText text={heading} /></h1>
            <svg width="427" height="86" viewBox="0 0 427 86" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-4">
                <path d="M19 69H177M177 69H398.5L423 18H398L381 51.3462L186 50.3654L177 69Z" stroke="#E5A445" stroke-width="4" />
                <circle cx="9.5" cy="68.5" r="9.5" fill="#E5A445" />
            </svg>
        </div>
    )
}

export default HeaderText