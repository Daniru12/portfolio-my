import emailjs from "emailjs-com";
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import {
  X,
  CheckCircle,
  AlertCircle,
  Loader2,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "", // success or error
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        setToast({
          show: true,
          message: "Message sent successfully!",
          type: "success",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(
          () => setToast({ show: false, message: "", type: "" }),
          5000
        );
      })
      .catch(() => {
        setToast({
          show: true,
          message: "Oops! Something went wrong. Please try again.",
          type: "error",
        });
        setTimeout(
          () => setToast({ show: false, message: "", type: "" }),
          5000
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-900 to-blackgray-900 relative overflow-hidden"
    >
      {/* Background elements - fixed positioning */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-60 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-60 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-blue-500 font-medium">Get In Touch</span>
              <h2 className="text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Contact Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-8"></div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Feel free to reach out with any questions or feedback. I'm here
                to assist you promptly.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Column - Contact Info */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Feel Free to Ask Me!
                  </h3>
                  <p className="text-gray-400 mb-8">
                    I'm here to assist you with any queries or concerns.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Mail Me</span>
                        <h4 className="text-lg font-medium text-white">
                          punsithdaniru@gmail.com
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Call Me</span>
                        <h4 className="text-lg font-medium text-white">
                          071-3837375
                        </h4>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h5 className="text-gray-400 mb-4">Follow Me</h5>
                      <div className="flex gap-4">
                        <a
                          href="https://www.facebook.com/daniru.ranathunga"
                          target="_blank"
                          className="p-3 bg-gray-800 rounded-full text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>

                        <a
                          href="https://www.linkedin.com/in/daniru-punsith-b96288312/"
                          target="_blank"
                          className="p-3 bg-gray-800 rounded-full text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>

                        <a
                          href="https://github.com/Daniru12"
                          target="_blank"
                          className="p-3 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="w-full lg:w-1/2">
                <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 shadow-xl">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 placeholder-gray-500"
                          placeholder="Your Name"
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 placeholder-gray-500"
                          placeholder="Your Email"
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 placeholder-gray-500"
                        placeholder="Your Subject"
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        rows="5"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 resize-none placeholder-gray-500"
                        placeholder="Your Message"
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 flex justify-center items-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed top-6 right-6 z-50 flex items-center p-4 mb-4 w-full max-w-xs rounded-lg shadow-lg ${
            toast.type === "success"
              ? "bg-green-900/80 text-green-100 border-l-4 border-green-500"
              : "bg-red-900/80 text-red-100 border-l-4 border-red-500"
          } backdrop-blur-sm`}
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8">
            {toast.type === "success" ? (
              <CheckCircle className="w-5 h-5 text-green-400" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400" />
            )}
          </div>
          <div className="ml-3 text-sm font-medium">{toast.message}</div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-transparent text-gray-400 hover:text-white rounded-lg p-1.5"
            onClick={() => setToast({ show: false, message: "", type: "" })}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
};
