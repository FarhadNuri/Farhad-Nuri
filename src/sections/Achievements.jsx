import { ACHIEVEMENTS } from "../data/achievements";
import useInView from "../hooks/useInView";
import { SectionHeader } from "../components/SectionHeader";

const Achievements = () => {
  const [ref, vis] = useInView();

  const colors = [
    { primary: "#2d7ff9", secondary: "#38bdf8" },
    { primary: "#a78bfa", secondary: "#c084fc" },
    { primary: "#22c55e", secondary: "#4ade80" },
    { primary: "#f59e0b", secondary: "#fbbf24" },
  ];

  return (
    <section id="achievements" ref={ref} className="py-25 px-[5%] bg-(--bg2) relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#2d7ff9] opacity-5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#a78bfa] opacity-5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <SectionHeader label="Milestones" title="Achievements" vis={vis} />

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => {
            const colorScheme = colors[i % colors.length];
            
            return (
              <div
                key={a.title}
                className="group relative bg-(--card) rounded-2xl p-6 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  opacity: vis ? 1 : 0,
                  transform: vis ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ${i * 0.1}s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                  border: `1px solid ${colorScheme.primary}30`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colorScheme.primary + "80";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colorScheme.primary + "30";
                }}
              >
                {/* Diagonal accent stripe */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                    clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                  }}
                />

                {/* Glow effect */}
                <div
                  className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ background: colorScheme.primary }}
                />

                {/* Top bar with icon and year */}
                <div className="relative z-10 flex items-start justify-between mb-4">
                  <div
                    className="text-5xl w-16 h-16 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${colorScheme.primary}20, ${colorScheme.secondary}20)`,
                      border: `1px solid ${colorScheme.primary}40`,
                    }}
                  >
                    {a.icon}
                  </div>

                  <span
                    className="text-xs font-bold tracking-wider px-3 py-1.5 rounded-full"
                    style={{
                      background: `${colorScheme.primary}20`,
                      color: colorScheme.primary,
                      border: `1px solid ${colorScheme.primary}40`,
                    }}
                  >
                    {a.year}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className="font-['Syne'] font-bold text-lg mb-2 text-(--text) group-hover:text-[var(--accent)] transition-colors duration-300"
                  >
                    {a.title}
                  </h3>

                  <p
                    className="text-[13px] text-(--text2) leading-[1.7]"
                    dangerouslySetInnerHTML={{ __html: a.desc }}
                  />
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;