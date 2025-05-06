import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Smart Pet Care Marketplace",
      description: "Developed PawGo, an innovative Smart Petcare Marketplace, utilizing the MERN stack to provide a robust platform with full CRUD functionality.",
      technologies: ["Express.js", "React.js", "Node.js", "MongoDB", "Tailwind CSS", "Mongoose", "Socket.io", "JavaScript"],
      link: "https://paw-go.vercel.app/",
      image: "https://i.postimg.cc/Jh5qw30b/Screenshot-2025-05-04-195618.png",
      category: "web",
      featured: true,
    },
    {
      id: 2,
      title: "Tasty Street Eats - Food Ordering Platform",
      description: "A food ordering platform designed with a feature-rich web application and a seamless Android app, simplifying online food ordering for customers and restaurant owners.",
      technologies: ["Express.js", "React.js", "Node.js", "MongoDB", "Tailwind CSS", "Mongoose", "Socket.io", "JavaScript"],
      link: "https://github.com/Daniru12/Food-Ordering-System",
      image: "https://i.postimg.cc/7ZVJMqLN/Screenshot-2024-12-18-055702.png",
      category: "web",
      featured: true,
    },
    {
      id: 3,
      title: "TripGo Application",
      description: "Designed for travelers, allowing them to easily search for any destination they are interested in visiting. The app provides suggestions for nearby travel destinations based on the user's current location.",
      technologies: ["Java", "JavaFX", "MySQL", "SceneBuilder", "OOP"],
      link: "https://github.com/Daniru12/Trip-Go-APP",
      image: "https://i.postimg.cc/TwHs4yRq/IMG-20250405-WA0002.jpg",
      category: "desktop",
      featured: false,
    },
    {
      id: 4,
      title: "Online Bus Ticket Reservation System",
      description: "A comprehensive web-based application designed to simplify the bus booking process for customers. Users can view available bus routes, select travel dates, and book tickets easily online.",
      technologies: ["Java", "HTML", "JavaScript", "CSS", "PHP", "MySQL", "OOP"],
      link: "https://github.com/Daniru12/Bus-Ticket-Reservation-System",
      image: "https://i.postimg.cc/9Q5yBWj4/Screenshot-2024-10-17-171914.png",
      category: "web",
      featured: false,
    },
    {
      id: 5,
      title: "Loomse: Textile and Garment Management System",
      description: "Reimagining the way the textile and garment industry operates with an innovative, user-friendly platform equipped with a comprehensive suite of tools designed to streamline operations and boost efficiency.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      link: "https://github.com/Daniru12/Textile-Garment_Management-System",
      image: "https://i.postimg.cc/k4mnjpgv/Screenshot-2024-12-17-005444.png",
      category: "web",
      featured: false,
    },
    {
      id: 6,
      title: "SLIIT GPA Calculator",
      description: "A tool designed specifically for students of the Sri Lanka Institute of Information Technology (SLIIT) to calculate their Grade Point Average (GPA) easily.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript"],
      link: "https://daniru12.github.io/SLIIT-GPA-Calculator/",
      image: "https://i.postimg.cc/LsBXMp7b/Screenshot-2025-02-28-160336.png",
      category: "tools",
      featured: true,
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
    filterProjects("all");
  }, []);

  const filterProjects = (category) => {
    setActiveFilter(category);
    if (category === "all") {
      setFilteredProjects(projectsData);
    } else if (category === "featured") {
      setFilteredProjects(projectsData.filter(project => project.featured));
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === category));
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-900 to-black relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-60 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-60 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-blue-500 font-medium">What I've Built</span>
              <h2 className="text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-8"></div>
              
              {/* Filter buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <button
                  onClick={() => filterProjects("all")}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === "all"
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  All Projects
                </button>
                <button
                  onClick={() => filterProjects("featured")}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === "featured"
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  Featured
                </button>
                <button
                  onClick={() => filterProjects("web")}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === "web"
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  Web Apps
                </button>
                <button
                  onClick={() => filterProjects("desktop")}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === "desktop"
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  Desktop Apps
                </button>
                <button
                  onClick={() => filterProjects("tools")}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === "tools"
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  Tools
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`bg-gray-900/50 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 shadow-xl hover:shadow-blue-500/10 transition-all duration-500 group
                    ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{
                    transitionDelay: `${(project.id % 6) * 100}ms`,
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image Area */}
                  <div className="h-48 relative overflow-hidden">
                    <div className={`absolute inset-0 transition-all duration-700 ${hoveredProject === project.id ? 'bg-blue-500/20 backdrop-blur' : 'bg-transparent'}`}></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* View project link overlay */}
                    <div 
                      className={`absolute inset-0 flex items-center justify-center bg-blue-500/70 backdrop-blur-sm transition-all duration-300 ${
                        hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-white text-blue-600 rounded-full font-medium transform transition-all duration-300 hover:scale-105"
                      >
                        View Project
                      </a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-500/10 text-blue-400 rounded-full px-3 py-1 text-xs hover:bg-blue-500/20 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="bg-gray-800 text-gray-400 rounded-full px-3 py-1 text-xs">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Project Link */}
                    <div className="flex justify-between items-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center group"
                      >
                        <span>View Details</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                      {project.featured && (
                        <span className="bg-blue-500/20 text-blue-400 rounded-full px-2 py-1 text-xs">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* GitHub Link */}
            <div className="mt-12 text-center">
              <a
                href="https://github.com/Daniru12"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-500/20 transition-all group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>See More Projects on GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};