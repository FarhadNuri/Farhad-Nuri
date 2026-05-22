import useInView from "../hooks/useInView";
import { SectionHeader } from "../components/SectionHeader";
import { EDUCATION } from "../data/education";
import { CERTS } from "../data/certs";

const Education = () => {
  const [ref, vis] = useInView();
  return (
    <section id="education" ref={ref} className="py-25 px-[5%] bg-(--bg) relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#2d7ff9] opacity-5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#38bdf8] opacity-5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <SectionHeader
          label="Academic"
          title="Education & Certifications"
          vis={vis}
        />


        {/* Certifications Section */}
        <div>

          {/* Certifications Grid - Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CERTS.map((c, i) => (
              <div
                key={c.name}
                className="relative rounded-2xl p-6 overflow-hidden cursor-default bg-(--card) transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg"
                style={{
                  border: `1px solid ${c.color}33`,
                  opacity: vis ? 1 : 0,
                  transform: vis ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: vis ? `${0.3 + i * 0.08}s` : "0s",
                  transitionTimingFunction: vis ? "cubic-bezier(0.34, 1.56, 0.64, 1)" : "ease-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = c.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = c.color + "33";
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{
                    background: `linear-gradient(180deg, ${c.color}, transparent)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="text-xs font-bold tracking-wider px-3 py-1 rounded-full"
                      style={{
                        background: c.color + "20",
                        color: c.color,
                        border: `1px solid ${c.color}40`,
                      }}
                    >
                      {c.year}
                    </div>
                  </div>

                  <h4 className="font-semibold text-base mb-2 leading-tight text-(--text)">
                    {c.name}
                  </h4>

                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: c.color }}
                    />
                    <div className="text-sm text-(--text2)">{c.org}</div>
                  </div>

                  {c.gpa && (
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: c.color }}
                      />
                      <div className="text-sm text-(--text2)">CGPA: {c.gpa}</div>
                    </div>
                  )}

                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-300"
                      style={{
                        background: c.color + "15",
                        color: c.color,
                        border: `1px solid ${c.color}40`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = c.color + "25";
                        e.currentTarget.style.borderColor = c.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = c.color + "15";
                        e.currentTarget.style.borderColor = c.color + "40";
                      }}
                    >
                      View Certificate
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Education;
