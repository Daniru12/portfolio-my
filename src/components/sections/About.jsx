import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const frontendSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Flutter", level: 75 },
    { name: "Kotlin", level: 70 },
    { name: "Next.js", level: 80 },
  ];
  
  const backendSkills = [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "MongoDB", level: 80 },
    { name: "Spring Boot", level: 70 },
    { name: "Java", level: 85 },
    { name: "Python", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "PHP", level: 70 },
  ];

  const SkillBar = ({ skill, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-blue-400">{skill}</span>
        <span className="text-gray-500 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black to-gray-900 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-blue-500 font-medium">Get To Know</span>
              <h2 className="text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Column - Personal Info */}
              <div className="order-2 lg:order-1">
                <div className="glass bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    As a passionate software engineering student at SLIIT, I have developed a solid foundation in programming languages like Java, Python, and C++, alongside web technologies such as HTML, CSS, JavaScript, React.js, Next.js, and Node.js.
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    I've also enhanced my skills through certification courses in Python programming and web design from the University of Moratuwa.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Beyond academics, I am an entrepreneur and active community leader. I thrive in team environments, enjoy creative problem-solving, and am always eager to learn new technologies. My goal is to collaborate with like-minded individuals to drive innovation and make a positive impact in the software industry.
                  </p>
                </div>
              </div>
              
              {/* Right Column - Skills */}
              <div className="order-1 lg:order-2">
                <div className="glass bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                  <div className="flex gap-4 mb-6">
                    <button 
                      onClick={() => setActiveTab("skills")}
                      className={`py-2 px-4 rounded-lg transition-all ${activeTab === "skills" 
                        ? "bg-blue-500 text-white" 
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
                    >
                      Skills
                    </button>
                    <button 
                      onClick={() => setActiveTab("education")}
                      className={`py-2 px-4 rounded-lg transition-all ${activeTab === "education" 
                        ? "bg-blue-500 text-white" 
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
                    >
                      Education
                    </button>
                    <button 
                      onClick={() => setActiveTab("experience")}
                      className={`py-2 px-4 rounded-lg transition-all ${activeTab === "experience" 
                        ? "bg-blue-500 text-white" 
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}
                    >
                      Experience
                    </button>
                  </div>
                  
                  {activeTab === "skills" && (
                    <div className="animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-blue-400">Frontend</h3>
                          {frontendSkills.map((skill, index) => (
                            <SkillBar key={index} skill={skill.name} level={skill.level} />
                          ))}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-blue-400">Backend</h3>
                          {backendSkills.map((skill, index) => (
                            <SkillBar key={index} skill={skill.name} level={skill.level} />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === "education" && (
                    <div className="animate-fadeIn">
                      <div className="relative pl-6 border-l-2 border-blue-500/30">
                        <div className="mb-8 relative">
                          <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-8 top-1"></div>
                          <div className="absolute w-2 h-2 bg-white rounded-full -left-7 top-2"></div>
                          <h4 className="text-lg font-bold text-blue-400">BSC (Hons) Software Engineering</h4>
                          <p className="text-gray-400">Sri Lanka Institute of Information Technology</p>
                          <p className="text-gray-500 text-sm">2023 - Present</p>
                          <p className="mt-2 text-gray-300">Faculty of Computing</p>
                        </div>
                        
                        <div className="mb-8 relative">
                          <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-8 top-1"></div>
                          <div className="absolute w-2 h-2 bg-white rounded-full -left-7 top-2"></div>
                          <h4 className="text-lg font-bold text-blue-400">Certificate in Python Programming</h4>
                          <p className="text-gray-400">University of Moratuwa</p>
                          <p className="text-gray-500 text-sm">2022</p>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-8 top-1"></div>
                          <div className="absolute w-2 h-2 bg-white rounded-full -left-7 top-2"></div>
                          <h4 className="text-lg font-bold text-blue-400">Certificate in Web Design</h4>
                          <p className="text-gray-400">University of Moratuwa</p>
                          <p className="text-gray-500 text-sm">2021</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === "experience" && (
                    <div className="animate-fadeIn">
                      <div className="relative pl-6 border-l-2 border-blue-500/30">
                        <div className="mb-8 relative">
                          <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-8 top-1"></div>
                          <div className="absolute w-2 h-2 bg-white rounded-full -left-7 top-2"></div>
                          <h4 className="text-lg font-bold text-blue-400">ICTT (NVQ Level 4)</h4>
                          <p className="text-gray-400">National Certificate in Information and Communication Technology</p>
                          <p className="text-gray-500 text-sm">2023 - 2024</p>
                          <p className="mt-2 text-gray-300">
                            Completed a comprehensive course with 6 months of internship, gaining practical experience and knowledge in ICT.
                          </p>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-8 top-1"></div>
                          <div className="absolute w-2 h-2 bg-white rounded-full -left-7 top-2"></div>
                          <h4 className="text-lg font-bold text-blue-400">Personal Projects</h4>
                          <p className="text-gray-400">Self-directed Learning</p>
                          <p className="text-gray-500 text-sm">2021 - Present</p>
                          <p className="mt-2 text-gray-300">
                            Developed multiple web applications and software solutions as part of self-directed learning and academic projects.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Bottom cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Learner</h3>
                <p className="text-gray-400">
                  Quick to adapt to new technologies and frameworks, always eager to expand my knowledge base.
                </p>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Team Player</h3>
                <p className="text-gray-400">
                  Excellent communication skills and ability to collaborate effectively in diverse team environments.
                </p>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Problem Solver</h3>
                <p className="text-gray-400">
                  Creative approach to problem-solving with a focus on efficiency and innovation.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

