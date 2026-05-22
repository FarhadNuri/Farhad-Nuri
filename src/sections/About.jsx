import useInView from "../hooks/useInView";
import aboutImg from "../assets/images/about-boy.png";
import { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";

const About = () => {
  const [ref, vis] = useInView();
  const [typed, setTyped] = useState("");
  const titles = [
    "Full Stack Developer",
    "Software Quality Assurance",
    "System Architecture",
    "Problem Solver",
  ];
  const [ti, setTi] = useState(0);

  useEffect(() => {
    let i = 0,
      t = titles[ti],
      timeout;

    const type = () => {
      if (i <= t.length) {
        setTyped(t.slice(0, i));
        i++;
        timeout = setTimeout(type, 80);
      } else {
        timeout = setTimeout(erase, 2000);
      }
    };

    const erase = () => {
      if (i >= 0) {
        setTyped(t.slice(0, i));
        i--;
        timeout = setTimeout(erase, 40);
      } else {
        setTi((p) => (p + 1) % titles.length);
      }
    };

    timeout = setTimeout(type, 300);
    return () => clearTimeout(timeout);
  }, [ti]);

  return (
    <section id="about" ref={ref} className="py-25 px-[5%] relative overflow-hidden">
      {/* Hero-style background */}
      <div className="absolute top-[20%] left-[10%] w-100 h-100 rounded-full bg-[radial-gradient(circle,rgba(47,182,255,0.14),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-75 h-75 rounded-full bg-[radial-gradient(circle,rgba(31,123,255,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute top-[50%] right-[20%] w-50 h-50 rounded-full bg-[radial-gradient(circle,rgba(39,224,255,0.1),transparent_70%)] pointer-events-none" />
      {/* grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-size-[60px_60px] opacity-40 pointer-events-none" />

      <div className="max-w-275 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Avatar side */}
        <div
          className={`flex flex-col items-center transition-all duration-700 ${vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className="relative">
            <div className="w-[320px] h-80 rounded-3xl bg-[linear-gradient(135deg,var(--accent),var(--accent2),var(--accent3))] p-0.75 animate-[pulse-glow_3s_ease_in_out_infinite]">
              <div className="w-full h-full rounded-[22px] bg-(--bg3) flex items-center justify-center overflow-hidden">
                <img
                  src={aboutImg}
                  alt=""
                  className="w-full h-full object-cover rounded-[22px]"
                />
              </div>
            </div>
            {[
              {
                icon: "",
                text: "React, NextJS, NodeJS",
                top: "-16px",
                right: "-16px",
                bg: "var(--accent2)",
              },
              {
                icon: "🚀",
                text: "SQA, System Architecture",
                bottom: "-16px",
                left: "-16px",
                bg: "var(--accent2)",
              },
            ].map((b) => (
              <div
                key={b.text}
                className="absolute flex items-center gap-2 text-[13px] font-semibold text-white rounded-xl px-3.5 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.3)] animate-[float_4s_ease-in-out_infinite]"
                style={{
                  top: b.top,
                  bottom: b.bottom,
                  left: b.left,
                  right: b.right,
                  background: b.bg,
                }}
              >
                {b.icon} {b.text}
              </div>
            ))}
          </div>
          
          {/* Typing text below image */}
          <div className="mt-10 text-center">
            <h2 className="text-[clamp(20px,3vw,32px)] font-extrabold text-(--accent) min-h-[40px] leading-[1.15]">
              {typed}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
        </div>

        {/* Text Side */}
        <div
          className={`transition-all duration-800 delay-200 ${vis ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          <div className="text-[13px] text-(--accent) font-semibold tracking-[3px] uppercase mb-3">
            About Me
          </div>

          <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold mb-5 leading-[1.15]">
            Passionate about <br />
            <span className="grad">building things</span>
          </h2>
          <p className="text-(--text2) mb-4 leading-[1.9] text-[15px]">
            I’m a Full Stack Developer passionate about building scalable and user-focused web applications.
          </p>

          <p className="text-(--text2) mb-7 leading-[1.9] text-[15px]">
            As a growing Full Stack Developer, I’m currently focused on mastering Next.js, Node.js, Software Quality Assurance, and System Design & Architecture to build software that is both reliable and impactful.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-7">
            {[
              ["📍", "Chattogram, Bangladesh"],
              ["🌐", "Open to Remote"],
            ].map(([i, t]) => (
              <div
                key={t}
                className="flex items-center gap-2 text-[14px] text-(--text2)"
              >
                <span>{i}</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
          
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 bg-[linear-gradient(135deg,var(--accent),var(--accent2))] text-white px-8 py-3.5 rounded-[10px] text-[15px] font-semibold font-[Syne] transition-all duration-300 shadow-[0_4px_24px_var(--glow)] hover:translate-y-0.5 hover:shadow-[0_8px_32px_var(--glow)] cursor-pointer"
            >
              View My Work <MoveRight className="ms-3" />
            </button>
            
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center bg-transparent text-(--text) px-8 py-3.5 rounded-[10px] text-[15px] font-semibold font-[Syne] transition-all duration-300 hover:border-(--accent) hover:text-(--accent) cursor-pointer border-2"
              style={{
                borderColor: 'var(--text)'
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
