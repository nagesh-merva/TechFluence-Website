import GlitchText from "../components/GlitchText";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BorderBeam } from "@/components/magicui/border-beam";
import { BoxReveal } from "@/components/magicui/box-reveal";

export default function Aboutus() {
  return (
    <div className="relative w-full py-20 overflow-hidden  ">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <AnimatedGridPattern
          numSquares={300}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%]"
          )}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mt-20 w-full flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-10 gap-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-5/12 h-auto flex justify-center md:justify-start">
          <img
            src="/main/WebsiteLogo.gif"
            alt="Techfluence Visual"
            className="h-full w-full rounded-2xl object-contain"
          />
        </div>

        {/* Right Side - Text Section */}
        <div className="w-full md:w-7/12 bg-black/40 p-5 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/10">
          {/* Heading (Fixed Size for Mobile) */}
          <div className="w-full flex justify-center mb-8 mt-2">
            <header className="text-creamy font-big-noodle font-bold text-[clamp(1.5rem, 5vw, 4rem)] leading-tight text-center">
              <BoxReveal boxColor="bg-amber-900" duration={1}>
                <AuroraText className="neon-text sm: text-5xl md:text-7xl">
                  About Techfluence
                </AuroraText>
              </BoxReveal>
            </header>
          </div>

          {/* Description */}
          <TextAnimate
            animation="slideUp"
            by="word"
            className="text-creamy text-base sm:text-lg md:text-xl font-normal leading-relaxed"
          >
            Techfluence 2025 is more than a tech fest—it is a dynamic fusion of cultures, ideas, and innovation, embodying the nation’s progressive spirit. Bringing together students from diverse fields, it fosters collaboration and a shared sense of purpose. By uniting creative minds, aspiring technologists, and industry leaders, Techfluence sparks innovation, challenges boundaries, and unlocks new possibilities.
          </TextAnimate>

          <TextAnimate
            animation="slideUp"
            by="word"
            className="text-creamy font-popins mt-5 text-base sm:text-lg md:text-xl leading-relaxed"
          >
            With thrilling competitions, interactive events, and expert-led workshops, Techfluence 2025 offers an enriching experience for all—whether you want to innovate, compete, or explore the latest tech trends.
          </TextAnimate>

          {/* Border Animation */}
          <BorderBeam duration={8} size={100} />
        </div>
      </div>
    </div>
  );
}
