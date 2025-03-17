import React, { useEffect, useRef, useState } from "react";

const ScrollVideoSection = () => {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [isFullyShown, setIsFullyShown] = useState(false);
  const [canScroll, setCanScroll] = useState(false);
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  // Handle intersection observer to detect when section is visible
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const handleIntersect = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !isVideoActive) {
        activateVideo();
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isVideoActive]);

  // Handle scroll detection after video is activated
  useEffect(() => {
    const handleScroll = () => {
      if (isVideoActive && canScroll && !userHasScrolled) {
        setUserHasScrolled(true);
        setIsFullyShown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVideoActive, canScroll, userHasScrolled]);

  // Add a specific listener for the video end event
  useEffect(() => {
    const currentVideo = videoRef.current;

    const handleEnd = () => {
      setVideoEnded(true);
    };

    if (currentVideo) {
      currentVideo.addEventListener("ended", handleEnd);
    }

    return () => {
      if (currentVideo) {
        currentVideo.removeEventListener("ended", handleEnd);
      }
    };
  }, []);

  const activateVideo = () => {
    setIsVideoActive(true);
    setVideoEnded(false);

    // Prevent scrolling for 3 seconds
    document.body.style.overflow = "hidden";

    // Start the video (muted by default)
    if (videoRef.current) {
      videoRef.current.muted = !soundOn;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }

    // After 3 seconds, allow scrolling but keep in fullscreen until user scrolls
    setTimeout(() => {
      setCanScroll(true);
      document.body.style.overflow = "";
    }, 3000);
  };

  const replayVideo = () => {
    setVideoEnded(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setSoundOn(!soundOn);
    }
  };

  return (
    <section className="relative  h-full w-full" id="event-video-section">
      {/* This is the trigger section that will be replaced by the video */}
      {!isFullyShown && (
        <div
          ref={sectionRef}
          className={`h-fit sm:h-svh w-full flex items-center justify-center bg-gradient-to-b from-black to-zinc-900 ${isVideoActive ? "opacity-0" : "opacity-100"
            } transition-opacity duration-500`}
        ></div>
      )}
      {/* Video section that starts fixed and stays fixed until user scrolls */}
      <div
        className={`${isFullyShown ? "relative" : "fixed inset-0"
          } bg-black z-50 h-auto sm:h-svh w-full transition-transform duration-700 ${isVideoActive ? "translate-y-0" : "translate-y-full"
          }`}
      >
        {/* Container for rotation to ensure all content rotates together */}
        <div className="relative w-full h-fit sm:h-full ">
          {/* Video element */}
          <video
            ref={videoRef}
            className="w-full h-full object-contain transform rotate-0 sm:-rotate-90 "
            src="/main/mainvideo.mp4"
            playsInline
            autoPlay
            muted
          />

          {/* Preview overlay with replay button - only visible after video ended */}
          {videoEnded && (
            <>
              {/* Semi-transparent overlay for better button visibility */}
              <div className="absolute inset-0 bg-black bg-opacity-40 z-20"></div>

              {/* Full-size image overlay */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center z-20 flex flex-col items-start justify-center text-left px-6 sm:px-12 md:px-24 pb-24"
                style={{ backgroundImage: "url('/events/final5.png')" }}
              >
                {/* Text overlay for EVENTS */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-wider">
                  EVENTS
                </h1>

                {/* Underline effect */}
                <div className="h-1 sm:h-1.5 bg-green-700 w-40 sm:w-64 md:w-80 lg:w-[30rem] mt-2"></div>

                {/* Subtitle text */}
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white tracking-wider mt-2">
                  TO THE FUTURE UNSEEN
                </h2>
              </div>

              {/* Replay button - Adjusted position for better responsiveness */}
              <button
                onClick={replayVideo}
                className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-black p-4 rounded-full transition-all flex items-center gap-2 z-30"
              >
                {/* Replay icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"
                    fill="black"
                  />
                </svg>
                <span className="text-white text-sm sm:text-base">Replay</span>
              </button>
            </>

          )}

          {/* Sound toggle button - position adjusted for rotation */}
          {isVideoActive && !videoEnded && (
            <button
              onClick={toggleSound}
              className="absolute bottom-8 right-8 sm:top-8 sm:left-8 sm:bottom-auto sm:right-auto md:bottom-8 md:right-8 md:top-auto md:left-auto bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all z-30"
            >
              {soundOn ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072M12 6v12m9-12v12M3 6v12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                  />
                </svg>
              )}
            </button>
          )}

          {/* Scroll indicator - position adjusted for rotation */}
          {videoEnded && canScroll && !userHasScrolled && (
            <div className="absolute bottom-8 right-0 left-0 sm:top-8 sm:bottom-auto md:bottom-8 md:top-auto text-center text-white z-30">
              <div className="animate-bounce">
                <p className="text-lg font-space-mono">
                  Scroll down to continue
                </p>
                <div className="mx-auto mt-2 w-6 h-6 border-b-2 border-r-2 border-white transform rotate-45 sm:rotate-225 md:rotate-45"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScrollVideoSection;
