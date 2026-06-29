import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";
import { testimonials } from "../../data/testimonials";
import SectionTitle from "../ui/SectionTitle";

export const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const paginate = (d) => {
    setDir(d);
    setIdx((prev) => (prev + d + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const t = setInterval(() => paginate(1), 5500);
    return () => clearInterval(t);
  }, [idx]);

  const current = testimonials[idx];

  return (
    <section id="testimonials" style={{ padding: "120px 0", backgroundColor: "#0d0d0d", overflow: "hidden" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 32px" }}>
        <SectionTitle title="Opiniones" subtitle="La experiencia de quienes ya llevan una obra de arte" />

        <div style={{ position: "relative" }}>
          <AnimatePresence initial={false} custom={dir} mode="wait">
            <motion.div
              key={idx}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="glass-strong" style={{ borderRadius: "24px", padding: "48px 52px", position: "relative" }}>
                {/* Quote mark */}
                <div style={{ position: "absolute", top: "28px", left: "40px", fontFamily: "\'Playfair Display\', Georgia, serif", fontSize: "120px", lineHeight: 1, color: "rgba(212,175,55,0.08)", fontWeight: 900, userSelect: "none" }}>"</div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "32px", flexWrap: "wrap" }}>
                  <img src={current.image} alt={current.name} style={{ width: "72px", height: "72px", borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(212,175,55,0.3)", flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                      {[...Array(current.rating)].map((_, i) => <HiStar key={i} style={{ color: "#D4AF37", fontSize: "18px" }} />)}
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.8, fontStyle: "italic", marginBottom: "24px", position: "relative", zIndex: 1 }}>"{current.comment}"</p>
                    <div>
                      <p style={{ color: "white", fontWeight: 700, fontSize: "16px" }}>{current.name}</p>
                      <p style={{ color: "#D4AF37", fontSize: "13px", letterSpacing: "0.08em", marginTop: "2px" }}>{current.tattoo}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          {[{ d: -1, style: { left: "-24px" } }, { d: 1, style: { right: "-24px" } }].map(({ d, style }) => (
            <motion.button key={d} onClick={() => paginate(d)}
              style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", ...style, width: "48px", height: "48px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "white", fontSize: "20px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              whileHover={{ background: "#D4AF37", color: "#090909", scale: 1.1 }}
            >
              {d < 0 ? <HiChevronLeft /> : <HiChevronRight />}
            </motion.button>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "32px" }}>
          {testimonials.map((_, i) => (
            <motion.button key={i} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
              style={{ height: "6px", borderRadius: "3px", border: "none", cursor: "pointer", transition: "all 0.3s", background: i === idx ? "#D4AF37" : "rgba(255,255,255,0.2)", width: i === idx ? "28px" : "6px" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
