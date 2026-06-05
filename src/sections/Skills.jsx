import useInView from "../hooks/useInView";
import { SKILLS } from "../data/skills";
import { useState, useRef, useEffect } from "react";
import { SectionHeader } from "../components/SectionHeader";
const Skills = () => {
  const [ref, vis] = useInView();
  const [activeFilter, setActiveFilter] = useState("All");
  const tickerRef = useRef(null);

  const filters = ["All", "Frontend", "Backend", "Testing", "Tools"];

  const toolIcons = [
    { name: "Git & GitHub", slug: "git", color: "F05032", cat: "Tools" },
    { name: "Postman", slug: "postman", color: "FF6C37", cat: "Testing" },
    { name: "Vite", slug: "vite", color: "646CFF", cat: "Frontend" },
    { name: "Vercel", slug: "vercel", color: "FFFFFF", cat: "Tools" },
    { name: "Netlify", slug: "netlify", color: "00C7B7", cat: "Tools" },
    { name: "React.js", slug: "react", color: "61DAFB", cat: "Frontend" },
    { name: "Node.js", slug: "nodedotjs", color: "339933", cat: "Backend" },
    { name: "Next.js", slug: "nextdotjs", color: "FFFFFF", cat: "Frontend" },
    { name: "JavaScript", slug: "javascript", color: "F7DF1E", cat: "Frontend" },
    { name: "TypeScript", slug: "typescript", color: "3178C6", cat: "Frontend" },
    { name: "Tailwind", slug: "tailwindcss", color: "38B2AC", cat: "Frontend",
      src: "https://camo.githubusercontent.com/fdaeef7608b6052e5736f3c87fb20d3105018cf99f64e06ed099d563c63026cb/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7461696c77696e64637373" },
    { name: "Express.js", slug: "express", color: "FFFFFF", cat: "Backend",
      src: "https://camo.githubusercontent.com/6c581f9592fa01dbdcf471f2691504e88c96d4840ce2710e9080513cdbed7c21/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d65787072657373" },
    { name: "MongoDB", slug: "mongodb", color: "47A248", cat: "Backend" },
    { name: "MySQL", slug: "mysql", color: "4479A1", cat: "Backend" },
    // { name: "Java", slug: "openjdk", color: "437291", cat: "Backend",
    //   src: "/assets/icons/java.svg" },
    { name: "Playwright", slug: "playwright", color: "2EAD33", cat: "Testing",
      src: "https://camo.githubusercontent.com/6b91f82a0eaa955bdd7f24a3b8562c75102d132e48dbac1d043c1a799fce8dc6/68747470733a2f2f706c61797772696768742e6465762f696d672f706c61797772696768742d6c6f676f2e737667" },
    { name: "Selenium", slug: "selenium", color: "43B02A", cat: "Testing" },
    { name: "JMeter", slug: "apachejmeter", color: "D22128", cat: "Testing" },
    // { name: "TestNG", slug: "testng", color: "3BAAF7", cat: "Testing",
    //   src: "https://banner2.cleanpng.com/20180816/eej/f5e89d12b09a007df882894bf58820c4.webp" },
    // { name: "JUnit", slug: "junit5", color: "25A162", cat: "Testing",
    //   src: "https://camo.githubusercontent.com/e3019f863cdab3d67f342c17ee252c1644dff81964ebc524860e6df77522f133/68747470733a2f2f6a756e69742e6f72672f6a756e6974352f6173736574732f696d672f6a756e6974352d6c6f676f2e706e67" },
    // { name: "Rest Assured", slug: "restassured", color: "6EBF8B", cat: "Testing",
    //   src: "https://avatars.githubusercontent.com/u/19369327?s=200&v=4" },
    { name: "Burp Suite", slug: "burpsuite", color: "FF6633", cat: "Testing" },
    { name: "Jira", slug: "jira", color: "0052CC", cat: "Testing" },
    // { name: "Jenkins", slug: "jenkins", color: "D24939", cat: "Tools" },
  ];

  const filtered = activeFilter === "All"
    ? toolIcons
    : toolIcons.filter((t) => t.cat === activeFilter);

  const ticker = [...filtered, ...filtered, ...filtered];

  const filterColors = {
    All: "var(--accent)",
    Frontend: "#38bdf8",
    Backend: "#60a5fa",
    Testing: "#a78bfa",
    Tools: "#34d399",
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-[5%] bg-(--bg) relative overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-[var(--accent)] opacity-[0.04] blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#38bdf8] opacity-[0.04] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* ── Header ── */}
        <div
          className="mb-14"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateY(-16px)",
            transition: "all 0.6s ease",
          }}
        >

          <SectionHeader
            label="TECH STACK"
            title="Skills & Techlogies"
            vis={vis}
          />
        </div>

        {/* ── Filter Buttons ── */}
        <div
          className="flex flex-wrap gap-3 mb-10"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateY(12px)",
            transition: "all 0.5s 0.15s ease",
          }}
        >
          {filters.map((f) => {
            const isActive = activeFilter === f;
            const col = filterColors[f];
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="relative px-5 py-2 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 cursor-pointer overflow-hidden"
                style={{
                  background: isActive ? col + "22" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isActive ? col + "88" : "rgba(255,255,255,0.08)"}`,
                  color: isActive ? col : "var(--text2)",
                  boxShadow: isActive ? `0 0 20px ${col}33` : "none",
                  transform: isActive ? "translateY(-1px)" : "none",
                }}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 opacity-10"
                    style={{ background: col }}
                  />
                )}
                {f}
              </button>
            );
          })}
        </div>

        {/* ── Ticker / Marquee ── */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateY(20px)",
            transition: "all 0.6s 0.2s ease",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Top line accent */}
          <div
            className="absolute top-0 left-0 right-0 h-[1px] opacity-60"
            style={{ background: `linear-gradient(90deg, transparent, ${filterColors[activeFilter]}, transparent)` }}
          />

          {/* Fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
            style={{ background: "linear-gradient(to right, var(--bg), transparent)" }} />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
            style={{ background: "linear-gradient(to left, var(--bg), transparent)" }} />

          {/* Track */}
          <div
            ref={tickerRef}
            key={activeFilter}
            className="flex items-center py-6 gap-2"
            style={{
              width: "max-content",
              animation: `ticker-scroll ${Math.max(18, filtered.length * 2.2)}s linear infinite`,
            }}
          >
            {ticker.map((t, i) => {
              const col = filterColors[t.cat] ?? "var(--accent)";
              return (
                <div
                  key={`${t.name}-${i}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl mx-1 group cursor-default transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = col + "18";
                    e.currentTarget.style.borderColor = col + "55";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <img
                    src={t.src ?? `https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                    alt={t.name}
                    className="w-6 h-6 object-contain"
                    style={{ filter: "brightness(0.85) saturate(0.9)", transition: "filter 0.3s" }}
                    onMouseEnter={(e) => { e.target.style.filter = "brightness(1) saturate(1)"; }}
                    onMouseLeave={(e) => { e.target.style.filter = "brightness(0.85) saturate(0.9)"; }}
                    loading="lazy"
                  />
                  <span
                    className="text-[13px] font-medium whitespace-nowrap"
                    style={{ color: "var(--text2)", transition: "color 0.3s" }}
                  >
                    {t.name}
                  </span>
                  {/* Category badge */}
                  <span
                    className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      background: col + "20",
                      color: col,
                      border: `1px solid ${col}33`,
                    }}
                  >
                    {t.cat}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Skill Category Cards (filter-reactive) ── */}
        {(() => {
          const catColorMap = ["#2fb6ff", "#38bdf8", "#60a5fa", "#a78bfa"];

          const visibleSkills = SKILLS.filter((category) =>
            activeFilter === "All"
              ? true
              : category.cat.toLowerCase().includes(activeFilter.toLowerCase())
          );

          const isSingle = visibleSkills.length === 1;

          return (
            <div
              className={`mt-8 grid gap-4 transition-all duration-300 ${
                isSingle
                  ? "grid-cols-1"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {visibleSkills.map((category, idx) => {
                // Find original index to keep color consistent
                const catIndex = SKILLS.findIndex((s) => s.cat === category.cat);
                const col = catColorMap[catIndex % 4];

                return (
                  <div
                    key={category.cat}
                    className="rounded-2xl p-5 relative overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: `1px solid ${col}44`,
                      opacity: vis ? 1 : 0,
                      transform: vis ? "none" : "translateY(20px)",
                      transition: `all 0.4s ${idx * 0.06}s cubic-bezier(0.22,1,0.36,1)`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = col + "88";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = `0 8px 32px ${col}22`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = col + "44";
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Top accent gradient line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, ${col}, transparent)` }}
                    />

                    {/* Glow blob */}
                    <div
                      className="absolute -top-8 -left-8 w-32 h-32 rounded-full blur-2xl pointer-events-none"
                      style={{ background: col, opacity: 0.12 }}
                    />

                    {/* Category label + count */}
                    <div className="flex items-center justify-between mb-4">
                      <p
                        className="text-[10px] font-bold tracking-[3px] uppercase"
                        style={{ color: col }}
                      >
                        {category.cat}
                      </p>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: col + "20",
                          color: col,
                          border: `1px solid ${col}33`,
                        }}
                      >
                        {category.items.length}
                      </span>
                    </div>

                    {/* Skill pills */}
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, si) => (
                        <span
                          key={skill.n}
                          className="inline-flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-full cursor-default"
                          style={{
                            background: col + "15",
                            border: `1px solid ${col}55`,
                            color: "var(--text2)",
                            transition: `all 0.3s ${si * 0.02}s ease`,
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: col, opacity: 0.75 }}
                          />
                          {skill.n}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })()}
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;