import { useEffect, useState } from "react";
import { MoveRight } from "lucide-react"; // Assuming MoveRight is from lucide-react

const Hero = () => {
  const [typed, setTyped] = useState("");
  const titles = [
    "Full Stack Developer",
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-[5%] relative overflow-hidden"
    >
      {/* Ambient orbs */}
      {/* (Space reserved for additional ambient background elements) */}
        {/* Ambient orbs */}
      <div className="absolute top-[20%] left-[10%] w-100 h-100 rounded-full bg-[radial-gradient(circle,rgba(47,182,255,0.14),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-75 h-75 rounded-full bg-[radial-gradient(circle,rgba(31,123,255,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute top-[50%] right-[20%] w-50 h-50 rounded-full bg-[radial-gradient(circle,rgba(39,224,255,0.1),transparent_70%)] pointer-events-none" />
      {/* grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-size-[60px_60px] opacity-40 pointer-events-none" />

      <div className="max-w-225 text-center relative z-10">
        {/* Badge */}


        {/* Title */}
        <h1 className="text-[clamp(36px,6vw,64px)] font-extrabold leading-[1.1] mb-5 animate-[fadeUp_0.8s_ease_forwards]">
          Hi, I'm
          <br />
          <span className="grad">Farhad Nuri</span>
          <br />
          <span className="text-(--accent)">{typed}</span>
          <span className="animate-pulse">|</span>
        </h1>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap animate-[fadeUp_0.8s_0.45s_ease_both]">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center bg-[linear-gradient(135deg,var(--accent),var(--accent2))] text-white px-8 py-3.5 rounded-[10px] text-[15px] font-semibold font-[Syne] transition-all duration-300 shadow-[0_4px_24px_var(--glow)] hover:translate-y-0.5 hover:shadow-[0_8px_32px_var(--glow)] cursor-pointer"
          >
            View My Work <MoveRight className="ms-3" />
          </button>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-transparent border border-(--border) text-(--text) px-8 py-3.5 rounded-[10px] text-[15px] font-medium font-[DM Sans] transition-all duration-300 hover:border-(--accent) hover:text-(--accent) cursor-pointer"
          >
            Contact Me
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-8 justify-center mt-16 flex-wrap animate-[fadeUp_0.8s_0.6s_ease_both]">
          {[
            ["6+", "Years Exp."],
            ["50+", "Projects"],
            ["5k+", "GitHub Stars"],
            ["80k+", "Blog Readers"],
          ].map(([n, lable]) => (
            <div key={lable} className="text-center">
              <div className="text-[24px] font-extrabold font-[Syne] grad">{n}</div>
              <div className="text-[12px] text-(--text2) mt-0.5">{lable}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;