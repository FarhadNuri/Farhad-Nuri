import { EXPERIENCE } from "../data/experience";
import useInView from "../hooks/useInView";
import { SectionHeader } from "../components/SectionHeader";

const Experience = () => {
  const [ref, vis] = useInView();
  return (
    <>
      <section id="experience" ref={ref} className="py-25 px-[5%]">
        <div className="max-w-225 mx-auto">
          <SectionHeader label="Career" title="Work Experience" vis={vis} />

          <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5 rounded"
            style={{
              background:
                "linear-gradient(to bottom,var(--accent),var(--accent2))",
            }}
          />

          {EXPERIENCE.map((e, i) => (
            <div
              key={e.co}
              className="pl-14 mb-10 relative"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis ? "none" : "translateY(30px)",
                transition: `all 0.6s ${i * 0.1}s ease`,
              }}
            >
              {/* Dot */}

              {/* Dot */}
              <div
                className="absolute left-2.75 top-1 w-5 h-5 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg,var(--accent),var(--accent2))",
                  border: "3px solid var(--bg)",
                  boxShadow: "0 0 12px var(--accent)",
                }}
              />

              {/* Card */}

              <div className="bg-(--card) border border-(--border) rounded-2xl p-6">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <div>
                    <h3 className="font-['Syne'] font-bold text-[18px]">
                      {e.role}
                    </h3>
                    <div className="text-(--accent) text-[14px] font-medium mt-0.5">
                      {e.co}
                    </div>
                  </div>

                  <span className="bg-(--bg3) border border-(--border) rounded-lg px-3 py-1 text-[12px] text-(--text2) whitespace-nowrap">
                    {e.period}
                  </span>
                </div>

                <p className="text-(--text2) text-[14px] leading-[1.7] mb-3">
                  {e.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {e.tags.map((t, ti) => (
                    <span
                      key={t}
                      className="bg-(--bg3) rounded-md px-2.5 py-0.75 text-[12px] text-(--text2)"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
