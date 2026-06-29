import { motion } from "framer-motion";
import { HiLightningBolt, HiTrendingUp, HiUsers, HiStar } from "react-icons/hi";
import CountUp from "../animations/CountUp";
import { useInView } from "../../hooks/useInView";

const stats = [
  { Icon: HiLightningBolt, value: 1500, suffix: "+", label: "Tatuajes Realizados" },
  { Icon: HiTrendingUp, value: 12, suffix: "+", label: "Años de Experiencia" },
  { Icon: HiUsers, value: 700, suffix: "+", label: "Clientes Satisfechos" },
  { Icon: HiStar, value: 4.9, suffix: "", label: "Calificación Promedio" },
];

export const Stats = () => {
  const { ref, inView } = useInView();
  return (
    <section style={{ padding: "100px 0", background: "linear-gradient(180deg, #0d0d0d 0%, #090909 100%)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "200px", background: "radial-gradient(ellipse, rgba(212,175,55,0.04), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }} ref={ref}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }} className="stats-grid">
          {stats.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.div
                key={i}
                className="glass-strong"
                style={{ borderRadius: "20px", padding: "36px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.04, boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.15)" }}
              >
                <div style={{ position: "absolute", top: 0, right: 0, width: "80px", height: "80px", background: "radial-gradient(circle at top right, rgba(212,175,55,0.08), transparent 70%)" }} />
                <div style={{ width: "56px", height: "56px", margin: "0 auto 20px", borderRadius: "16px", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon style={{ color: "#D4AF37", fontSize: "24px" }} />
                </div>
                <div className="gradient-text" style={{ fontFamily: "\'Playfair Display\', Georgia, serif", fontSize: "48px", fontWeight: 900, lineHeight: 1, marginBottom: "10px" }}>
                  {inView && <CountUp end={s.value} duration={2} suffix={s.suffix} />}
                </div>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{".stats-grid { @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr) !important; } @media (max-width: 480px) { grid-template-columns: 1fr !important; } }"}</style>
    </section>
  );
};

export default Stats;
