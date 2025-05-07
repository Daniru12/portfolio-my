import { useEffect, useState } from "react";
import DownloadIcon from "../../assets/download.png";
import GitHubIcon from "../../assets/github.png";
import LinkedInIcon from "../../assets/linkedin.png";
import MyProfile from "../../assets/daniru.jpg";
import MyResume from "../../assets/Daniru.pdf";
import { RevealOnScroll } from "../RevealOnScroll";


export const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi, I'm Daniru Ranathunga";
  const roles = ["Software Engineer", "Web Developer", "Problem Solver"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(roles[0]);

  // Typing animation effect
  useEffect(() => {
    setIsLoaded(true);
    
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setTypedText(fullText.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Role rotation effect
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    setCurrentRole(roles[currentRoleIndex]);
  }, [currentRoleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className={`container mx-auto px-4 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="lg:grid lg:grid-cols-2 items-center gap-8">
          {/* Left Column - Profile Image & Social Links */}
          <div className="flex flex-col items-center justify-center order-2 lg:order-1">
            <div className="relative group mb-12">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gray-900 rounded-full p-1">
                <img
                  src={MyProfile}
                  alt="Daniru Ranathunga"
                  className="rounded-full w-64 md:w-72 lg:w-80 object-cover aspect-square transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-6 justify-center">
              <a
                href="https://github.com/Daniru12"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-wrapper"
              >
                <div className="bg-gray-800 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20">
                  <img
                    src={GitHubIcon}
                    width={30}
                    height={30}
                    alt="GitHub"
                    className="opacity-80 hover:opacity-100"
                  />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/daniru-punsith-b96288312/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-wrapper"
              >
                <div className="bg-gray-800 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20">
                  <img
                    src={LinkedInIcon}
                    width={30}
                    height={30}
                    alt="LinkedIn"
                    className="opacity-80 hover:opacity-100"
                  />
                </div>
              </a>
              <a
                href={MyResume}
                download
                className="social-icon-wrapper"
              >
                <div className="bg-gray-800 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20">
                  <img
                    src={DownloadIcon}
                    width={30}
                    height={30}
                    alt="Download Resume"
                    className="opacity-80 hover:opacity-100"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2 mb-12 lg:mb-0">
            <RevealOnScroll>
              <div className="text-center lg:text-left z-10 px-4">
                <div className="mb-2 text-blue-500 font-medium">Welcome to my portfolio</div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  {typedText}
                  <span className="inline-block animate-blink">|</span>
                </h1>
                <div className="h-8 mb-4">
                  <p className="text-xl text-blue-300 font-medium">
                    I am a <span className="transition-all duration-500">{currentRole}</span>
                  </p>
                </div>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
                  Motivated software engineering undergraduate with a foundation in
                  programming, problem-solving, and web development. Experienced in
                  building responsive websites and database-driven applications.
                  Known for strong interpersonal skills and professional conduct.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#projects"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 hover:from-blue-500 hover:to-cyan-500"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="border border-blue-500 py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 17L12 7M12 17L7 12M12 17L17 12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};