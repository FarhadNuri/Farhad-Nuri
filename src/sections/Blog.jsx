import { BLOGS } from "../data/blog";
import useInView from "../hooks/useInView";
import { SectionHeader } from "../components/SectionHeader";
import { useState } from "react";

const Blog = () => {
  const [ref, vis] = useInView();
  const [idx, setIdx] = useState(0);

  const visible = 3;
  const max = BLOGS.length - visible;
  return (
    <>
      <section id="blog" ref={ref} className="py-25 px-[5%] bg-(--bg2)">
        <div className="max-w-275 mx-auto">
          <SectionHeader label="Writing" title="Blog Articles" vis={vis}>
            <div className="flex gap-2">
              <button
                onClick={() => setIdx(Math.max(0, idx - 1))}
                className={`w-9 h-9 rounded-lg flex items-center justify-center border border-(--border) bg-(--bg3)
                transition ${idx === 0 ? "opacity-40 cursor-not-allowed" : "hover:border-(--accent)"}`}
              >
                ←
              </button>

              <button
                onClick={() => setIdx(Math.min(max, idx + 1))}
                className={`w-9 h-9 rounded-lg flex items-center justify-center border border-(--border) bg-(--bg3)
                transition ${idx === max ? "opacity-40 cursor-not-allowed" : "hover:border-(--accent)"}`}
              >
                →
              </button>
            </div>
          </SectionHeader>
          {/* slider */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${idx * 344}px)` }}
            >
              {BLOGS.map((b, i) => (
                <div
                  key={b.title}
                  className={`min-w-[320px] shrink-0 bg-(--card) border border-(--border)
            rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1
            hover:shadow-xl ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  {/* Top Gradient Bar */}
                  <div
                    className="h-1.25"
                    style={{
                      background: `linear-gradient(90deg, ${b.color}, ${b.color}66)`,
                    }}
                  />

                  {/* Icon Area */}
                  {/* Icon Area */}
                  <div
                    className="h-32.5 flex items-center justify-center text-4xl"
                    style={{
                      background: `linear-gradient(135deg, ${b.color}22, ${b.color}08)`,
                    }}
                  >
                    {["🏗️", "🔷", "⚡", "🎬", "🔄"][i]}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex gap-2 mb-3 items-center">
                      <span
                        className="text-[11px] font-semibold px-2 py-0.75 rounded-md"
                        style={{ background: b.color + "20", color: b.color }}
                      >
                        {b.tag}
                      </span>


                    </div>

                    <h3 className="font-[Syne] font-bold text-[16px] leading-[1.4] mb-2">
                      {b.title}
                    </h3>

                    <p className="text-[12px] text-(--text2)">{b.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


{/* Dots */}
<div className="flex justify-center gap-2 mt-6">
    {Array.from({ length: BLOGS.length - visible + 1 }, (_, i) => (
        <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === idx ? "w-6 bg-(--accent)" : "w-2 bg-(--border)"}`}
        />
    ))}
</div>


        </div>
      </section>
    </>
  );
};

export default Blog;
