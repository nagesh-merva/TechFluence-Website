import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RetroNavbar = ({ isOpen, onClose }) => {
  const [activeLink, setActiveLink] = useState("");
  const [hoverLink, setHoverLink] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      const path = window.location.pathname;
      const link = navLinks.find((link) => link.id === path);
      if (link) {
        setActiveLink(link.id);
      } else {
        setActiveLink("/");
      }
    }
  }, [isOpen]);

  const navLinks = [
    { id: "/", label: "HOME" },
    { id: "/events", label: "EVENTS" },
    { id: "/results", label: "RESULTS" },
    { id: "/gallery", label: "GALLERY" },
    { id: "/aboutus", label: "ABOUT" },
  ];

  const colors = {
    bg: "rgba(0, 8, 20, 0.9)",
    panelBg: "rgba(8, 20, 30, 0.85)",
    accent: "rgb(94, 234, 212)",
    accentDim: "rgba(94, 234, 212, 0.7)",
    text: "rgba(255, 253, 240, 0.9)",
    textDim: "rgba(255, 253, 240, 0.6)",
    border: "rgba(94, 234, 212, 0.5)",
    borderDark: "rgba(94, 234, 212, 0.2)",
  };

  const playNavSound = (type) => {
    console.log(`Playing sound: ${type}`);
    // Uncomment when you have sound files
    /*
        const audio = new Audio();
        audio.volume = 0.3;
        
        switch(type) {
            case 'hover':
                audio.src = '/sounds/hover.mp3';
                break;
            case 'select':
                audio.src = '/sounds/select.mp3';
                break;
            case 'open':
                audio.src = '/sounds/open.mp3';
                break;
            case 'close':
                audio.src = '/sounds/close.mp3';
                break;
        }
        
        audio.play().catch(e => console.log('Audio play prevented by browser'));
        */
  };

  const handleNavigate = (path) => {
    playNavSound("select");
    setActiveLink(path);
    navigate(path);
    setTimeout(() => {
      console.log("Closing navbar after navigation");
      onClose();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 bg-black/20 backdrop-blur-md ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="scanlines absolute inset-0 pointer-events-none opacity-20"></div>

      <div className="relative max-w-4xl w-full mx-4">
        <div className="relative">
          <svg
            className="absolute -top-1 -left-1 -right-1 -bottom-1 w-[calc(100%+8px)] h-[calc(100%+8px)]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M3,10 L0,15 V85 L3,90 H97 L100,85 V15 L97,10 H3"
              fill="none"
              stroke={colors.accent}
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M4,11 L1,16 V84 L4,89 H96 L99,84 V16 L96,11 H4"
              fill="none"
              stroke={colors.accent}
              strokeWidth="0.2"
              strokeDasharray="1,0.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div
            className="relative p-1"
            style={{
              backgroundColor: colors.panelBg,
              clipPath:
                "polygon(0% 12%, 3% 0%, 97% 0%, 100% 12%, 100% 88%, 97% 100%, 3% 100%, 0% 88%)",
              boxShadow: `0 0 15px 0 rgba(94, 234, 212, 0.15), 
                                      inset 0 0 10px 0 rgba(94, 234, 212, 0.1)`,
            }}
          >
            <div
              className="px-6 py-4 mb-1"
              style={{
                background: `linear-gradient(90deg, 
                                           ${colors.panelBg} 0%, 
                                           rgba(94, 234, 212, 0.15) 50%, 
                                           ${colors.panelBg} 100%)`,
                borderBottom: `1px solid ${colors.borderDark}`,
              }}
            >
              <div className="flex justify-between items-center">
                <div className="relative">
                  <h2
                    className="text-2xl md:text-3xl tracking-widest glitch-text"
                    style={{
                      fontFamily: "'Press Start 2P', 'Space Mono', monospace",
                      color: colors.accent,
                      textShadow: `0 0 5px ${colors.accent}80, 0 0 10px ${colors.accent}40`,
                    }}
                  >
                    NAVIGATION_
                  </h2>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center">
                    <span className="w-6 h-4 bg-transparent relative overflow-hidden mr-1">
                      <span
                        className="absolute inset-0 animate-pulse"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
                          animationDuration: "1.5s",
                        }}
                      ></span>
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    console.log("Close button clicked");
                    playNavSound("close");
                    onClose();
                  }}
                  className="group relative w-12 h-12 flex items-center justify-center transition-all duration-200"
                  onMouseEnter={() => playNavSound("hover")}
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 40 40"
                  >
                    <path
                      d="M5,10 L2,13 V27 L5,30 H35 L38,27 V13 L35,10 H5"
                      fill="none"
                      stroke={colors.border}
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-6 h-6 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke={colors.accent}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <nav className="px-4 py-4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {navLinks.map((link) => {
                  const isActive = activeLink === link.id;
                  const isHovered = hoverLink === link.id;

                  return (
                    <li key={link.id} className="w-full">
                      <div className="relative">
                        <svg
                          className="absolute inset-0 w-full h-full pointer-events-none"
                          viewBox="0 0 100 40"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M2,6 L0,12 V28 L2,34 H98 L100,28 V12 L98,6 H2"
                            fill={
                              isActive
                                ? `rgba(94, 234, 212, 0.12)`
                                : isHovered
                                ? `rgba(94, 234, 212, 0.08)`
                                : "transparent"
                            }
                            stroke={
                              isActive ? colors.accent : colors.borderDark
                            }
                            strokeWidth={isActive ? "1" : "0.5"}
                            vectorEffect="non-scaling-stroke"
                          />

                          {isActive && (
                            <path
                              d="M0,20 H100"
                              stroke={colors.accent}
                              strokeWidth="0.15"
                              strokeDasharray="0.5,1.5"
                              opacity="0.5"
                              vectorEffect="non-scaling-stroke"
                            />
                          )}
                        </svg>
                        <button
                          onClick={() => {
                            console.log(`Button ${link.label} clicked`);
                            handleNavigate(link.id);
                          }}
                          onMouseEnter={() => {
                            setHoverLink(link.id);
                            playNavSound("hover");
                          }}
                          onMouseLeave={() => setHoverLink(null)}
                          className="relative w-full px-6 py-4 text-lg tracking-wider text-left transition-all duration-200 z-10"
                        >
                          <div className="flex items-center">
                            <span
                              className="text-sm mr-3 font-mono"
                              style={{
                                color: isActive
                                  ? colors.accent
                                  : colors.accentDim,
                                opacity: isActive ? 1 : 0.8,
                              }}
                            >
                              [
                              {link.id === "/"
                                ? "H"
                                : link.id.charAt(1).toUpperCase()}
                              ]
                            </span>
                            <span
                              style={{
                                fontFamily:
                                  "'Press Start 2P', 'Space Mono', monospace",
                                fontSize: "0.9rem",
                                letterSpacing: "0.15em",
                                color: isActive ? colors.text : colors.textDim,
                                textShadow: isActive
                                  ? `0 0 5px ${colors.accent}60`
                                  : "none",
                              }}
                            >
                              {link.label}
                            </span>

                            {isActive && (
                              <span
                                className="ml-2 inline-block w-3 h-3 animate-pulse"
                                style={{
                                  backgroundColor: colors.accent,
                                  boxShadow: `0 0 5px ${colors.accent}, 0 0 10px ${colors.accent}`,
                                }}
                              ></span>
                            )}
                          </div>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div
              className="px-6 py-3 mt-1"
              style={{
                borderTop: `1px solid ${colors.borderDark}`,
                background: `linear-gradient(90deg, 
                                           ${colors.panelBg} 0%, 
                                           rgba(94, 234, 212, 0.1) 50%, 
                                           ${colors.panelBg} 100%)`,
              }}
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p
                  className="text-sm tracking-wider"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    color: colors.textDim,
                  }}
                >
                  <span style={{ color: colors.accent }}>[INFO]</span> SELECT
                  DESTINATION TO PROCEED
                </p>

                <div className="flex items-center gap-3">
                  {[
                    {
                      name: "Linkedin",
                      link: "https://www.linkedin.com/company/gecintensa/about/",
                    },
                    {
                      name: "Instagram",
                      link: "https://www.instagram.com/intensa_techfluence2025/",
                    },
                  ].map((social) => (
                    <div key={social} className="relative">
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 100 30"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M5,6 L0,15 L5,24 H95 L100,15 L95,6 H5"
                          fill="rgba(94, 234, 212, 0.05)"
                          stroke={colors.borderDark}
                          strokeWidth="0.5"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>

                      <a
                        href={social.link}
                        target="_blank"
                        className="relative px-4 py-2 text-xs tracking-wider transition-colors z-10"
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          color: colors.accentDim,
                        }}
                        onMouseEnter={() => playNavSound("hover")}
                      >
                        {social.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-1 overflow-hidden">
            <div
              className="w-full h-full animate-pulse"
              style={{
                background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
                animationDuration: "2s",
              }}
            ></div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
            <div
              className="w-full h-full animate-pulse"
              style={{
                background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
                animationDuration: "2s",
                animationDelay: "0.5s",
              }}
            ></div>
          </div>
        </div>
        <style jsx>{`
          .scanlines::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              rgba(18, 16, 16, 0) 50%,
              rgba(0, 0, 0, 0.2) 50%
            );
            background-size: 100% 4px;
            pointer-events: none;
          }

          .glitch-text {
            position: relative;
          }

          .glitch-text::before,
          .glitch-text::after {
            content: "NAVIGATION_";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.8;
          }

          .glitch-text::before {
            left: 2px;
            text-shadow: -1px 0 #ff00de;
            animation: glitch-anim 2s infinite linear alternate-reverse;
          }

          .glitch-text::after {
            left: -2px;
            text-shadow: 3px 0 #00fff9;
            animation: glitch-anim2 5s infinite linear alternate-reverse;
          }

          @keyframes glitch-anim {
            0% {
              clip-path: inset(80% 0 0 0);
              transform: translate(-2px, -2px);
            }
            10% {
              clip-path: inset(30% 0 60% 0);
              transform: translate(2px, 2px);
            }
            20% {
              clip-path: inset(50% 0 20% 0);
              transform: translate(-1px, 1px);
            }
            30% {
              clip-path: inset(14% 0 69% 0);
              transform: translate(1px, -1px);
            }
            40% {
              clip-path: inset(66% 0 5% 0);
              transform: translate(2px, -2px);
            }
            50% {
              clip-path: inset(16% 0 80% 0);
              transform: translate(-2px, 2px);
            }
            60% {
              clip-path: inset(25% 0 62% 0);
              transform: translate(-1px, -1px);
            }
            70% {
              clip-path: inset(76% 0 19% 0);
              transform: translate(2px, 1px);
            }
            80% {
              clip-path: inset(42% 0 39% 0);
              transform: translate(-2px, 2px);
            }
            90% {
              clip-path: inset(67% 0 11% 0);
              transform: translate(1px, -2px);
            }
            100% {
              clip-path: inset(19% 0 78% 0);
              transform: translate(2px, -1px);
            }
          }

          @keyframes glitch-anim2 {
            0% {
              clip-path: inset(59% 0 31% 0);
              transform: translate(2px, -1px);
            }
            10% {
              clip-path: inset(15% 0 72% 0);
              transform: translate(-2px, 2px);
            }
            20% {
              clip-path: inset(86% 0 12% 0);
              transform: translate(1px, 1px);
            }
            30% {
              clip-path: inset(31% 0 56% 0);
              transform: translate(-1px, -2px);
            }
            40% {
              clip-path: inset(8% 0 83% 0);
              transform: translate(2px, 2px);
            }
            50% {
              clip-path: inset(46% 0 26% 0);
              transform: translate(-2px, -1px);
            }
            60% {
              clip-path: inset(13% 0 49% 0);
              transform: translate(1px, -1px);
            }
            70% {
              clip-path: inset(76% 0 7% 0);
              transform: translate(-2px, 2px);
            }
            80% {
              clip-path: inset(26% 0 47% 0);
              transform: translate(-1px, 1px);
            }
            90% {
              clip-path: inset(90% 0 8% 0);
              transform: translate(2px, -2px);
            }
            100% {
              clip-path: inset(50% 0 48% 0);
              transform: translate(-1px, 1px);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default RetroNavbar;
