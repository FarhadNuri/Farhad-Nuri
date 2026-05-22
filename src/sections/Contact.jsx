import useInView from "../hooks/useInView";
import { SectionHeader } from "../components/SectionHeader";
import { useState } from "react";

const Contact = () => {
  const [ref, vis] = useInView();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async () => {
    // Validate
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Invalid email address");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Using Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'f95d7a37-7fab-45cd-a715-9889a035ff41',
          subject: 'New Portfolio Contact from ' + form.name,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Failed to send email');
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again or email me directly.");
      console.error('Email error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contact" ref={ref} className="py-25 px-[5%]">
        <div className="max-w-225 mx-auto">
          <SectionHeader label="Get In Touch" title="Contact Me" vis={vis} />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left INFO */}
            <div
              className={`transition-all duration-700 ${vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <p className="text-(--text2) leading-[1.8] mb-7 text-[15px]">
                I'm always open to interesting conversations, collaborations, or
                new opportunities. Whether you have a project in mind or just
                want to say hi — my inbox is open!
              </p>
              {[
                {
                  label: "Email",
                  value: "farhadnuri559@gmail.com",
                  icon: "https://cdn.simpleicons.org/gmail/EA4335",
                  link: "mailto:farhadnuri559@gmail.com"
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/farhad-nuri",
                  icon: "data:image/svg+xml,%3Csvg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='%230A66C2'%3E%3Cpath d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/%3E%3C/svg%3E",
                  link: "https://www.linkedin.com/in/farhad-nuri-ba99a62a5/"
                },
                {
                  label: "GitHub",
                  value: "github.com/FarhadNuri",
                  iconLight: "https://cdn.simpleicons.org/github/181717",
                  iconDark: "https://cdn.simpleicons.org/github/fff",
                  link: "https://github.com/FarhadNuri"
                },
                {
                  label: "WhatsApp",
                  value: "+880 186 577 9218",
                  icon: "https://cdn.simpleicons.org/whatsapp/25D366",
                  link: "https://wa.me/8801865779218"
                },
              ].map(({ label, value, icon, iconLight, iconDark, link }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 mb-4 group hover:translate-x-1 transition-transform duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-(--bg3) border border-(--border) group-hover:border-(--accent) transition-colors duration-300">
                    {icon ? (
                      <img src={icon} alt={label} className="w-5 h-5" />
                    ) : (
                      <>
                        <img src={iconLight} alt={label} className="w-5 h-5 dark:hidden" />
                        <img src={iconDark} alt={label} className="w-5 h-5 hidden dark:block" />
                      </>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-(--text2) group-hover:text-(--accent) transition-colors duration-300">{label}</p>
                    <p className="text-sm text-(--text2)">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Right Form */}
            {/* Right Form */}
            <div
              className={`transition-all duration-700 delay-200 ${vis ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              {sent ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-[Syne] font-bold text-xl mb-2 grad">
                    Message Sent!
                  </h3>
                  <p className="text-(--text2)">
                    I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="bg-(--card) border border-(--border) rounded-2xl p-7 shadow-sm">
                  {/* Error message */}
                  {error && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Inputs */}
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      disabled={loading}
                      className="w-full bg-(--bg3) border border-(--border) rounded-lg px-4 py-3 mb-4 text-sm outline-none focus:border-(--accent) transition placeholder:text-(--text2) disabled:opacity-50"
                    />

                    <input
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      disabled={loading}
                      className="w-full bg-(--bg3) border border-(--border) rounded-lg px-4 py-3 mb-4 text-sm outline-none focus:border-(--accent) transition placeholder:text-(--text2) disabled:opacity-50"
                    />

                    <textarea
                      rows={5}
                      placeholder="Your Message"
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      disabled={loading}
                      className="w-full bg-(--bg3) border border-(--border) rounded-lg px-4 py-3 text-sm outline-none focus:border-(--accent) transition resize-none placeholder:text-(--text2) disabled:opacity-50"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="cursor-pointer w-full mt-5 py-3 rounded-lg text-white font-semibold text-sm bg-[linear-gradient(135deg,var(--accent),var(--accent2))] hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
