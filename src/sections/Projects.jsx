import { PROJECTS } from "../data/projects";
import useInView from "../hooks/useInView";
import { SectionHeader } from "../components/SectionHeader";
import { ExternalLink, GitBranch } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [ref, vis] = useInView();
  const [activeFilter, setActiveFilter] = useState("Full Stack");

  const filters = ["Full Stack", "Testing & QA"];

  const filterColors = {
    "Full Stack": "#a78bfa",
    "Testing & QA": "#10b981",
  };

  const filteredProjects = PROJECTS.filter(
    (project) => project.category === activeFilter
  );

  return (
    <>
      <section id="projects" ref={ref} className="py-25 px-[5%] bg-(--bg2)">
        <div className="max-w-275 mx-auto">
          <SectionHeader
            label="Portfolio"
            title="Featured Projects"
            vis={vis}
          />

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

          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {filteredProjects.map((p, i) => (
              <div
                key={p.title}
                className="bg-(--card) border border-(--border) rounded-2xl overflow-hidden flex flex-col cursor-pointer relative"
                style={{
                  opacity: vis ? 1 : 0,
                  transform: vis ? "none" : "translateY(30px)",
                  transition: `all 0.6s ${i * 0.1}s ease`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = p.color + "66";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                {/* Top Bar */}
                <div
                  className="h-1"
                  style={{
                    background: `linear-gradient(90deg, ${p.color}, ${p.color}88)`,
                  }}
                ></div>
                <div className="p-6 flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 
                      className="font-['Syne'] font-bold text-lg"
                      style={{ color: p.color }}
                    >
                      {p.title}
                    </h3>

                    <div className="flex gap-2">
                      <a
                        href={p.gh}
                        target="_blank"
                        className="bg-(--bg3) border border-(--border) rounded-md w-7.5 h-7.5 flex items-center justify-center text-[14px] text-(--text2) no-underline"
                      >
                        <GitBranch size={16} />
                      </a>

                      <a
                        href={p.live}
                        target="_blank"
                        className="bg-(--bg3) border border-(--border) rounded-md w-7.5 h-7.5 flex items-center justify-center text-[14px] text-(--text2) no-underline"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  <p className="text-(--text2) text-[14px] leading-[1.7] mb-4">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[12px] font-medium px-2.5 py-0.75 rounded-md"
                        style={{
                          background: p.color + "15",
                          color: p.color,
                          border: `1px solid ${p.color}33`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {/* LinkedIn CTA */}
                {/* <div className="px-6 py-3 border-t border-(--border)">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="flex items-center gap-1.5 text-[12px] text-(--text2) no-underline"
                  >
                    <span className="w-4 h-4 bg-[#0077b5] rounded-[3px] flex items-center justify-center text-[9px] font-bold text-white">
                      in
                    </span>
                    View on LinkedIn
                  </a>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
