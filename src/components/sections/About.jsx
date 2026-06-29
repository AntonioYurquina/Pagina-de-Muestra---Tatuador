import { motion } from "framer-motion";
import { aboutContent } from "../../data/content";
import SectionTitle from "../ui/SectionTitle";
import { HiCheckCircle } from "react-icons/hi";

export const About = () => {
  return (
    <section id="about" style={{ padding: "120px 0", backgroundColor: "#0d0d0d" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        <SectionTitle title="Sobre Mí" subtitle="Conoce al artista detrás de cada obra" />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="grid-responsive">
          {/* Image */}
          <motion.div
            style={{ position: "relative" }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ position: "absolute", inset: "-1px", background: "linear-gradient(135deg, rgba(212,175,55,0.3), transparent, rgba(212,175,55,0.1))", borderRadius: "20px", zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1, borderRadius: "20px", overflow: "hidden" }}>
              <img
                src={aboutContent.image}
                alt={aboutContent.name}
                style={{ width: "100%", height: "560px", objectFit: "cover", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(9,9,9,0.85) 0%, transparent 50%)" }} />
              <div style={{ position: "absolute", bottom: "28px", left: "28px" }}>
                <h3 style={{ fontFamily: "\'Playfair Display\', Georgia, serif", fontSize: "26px", fontWeight: 800, color: "white", marginBottom: "4px" }}>{aboutContent.name}</h3>
                <p style={{ color: "#D4AF37", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}>{aboutContent.title}</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.85, fontSize: "16px" }}>{aboutContent.description}</p>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.85, fontSize: "15px" }}>{aboutContent.philosophy}</p>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "8px" }}>
              {aboutContent.experience.map((item, i) => (
                <motion.div
                  key={i}
                  className="glass"
                  style={{ borderRadius: "14px", padding: "20px 24px", textAlign: "center" }}
                  whileHover={{ scale: 1.03, boxShadow: "0 12px 40px rgba(0,0,0,0.4)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <div className="gradient-text" style={{ fontFamily: "\'Playfair Display\', Georgia, serif", fontSize: "36px", fontWeight: 800, marginBottom: "6px" }}>{item.value}</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div style={{ marginTop: "8px" }}>
              <h4 style={{ color: "white", fontSize: "13px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>Logros Destacados</h4>
              {aboutContent.achievements.map((item, i) => (
                <motion.div
                  key={i}
                  style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "12px" }}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <HiCheckCircle style={{ color: "#D4AF37", fontSize: "18px", flexShrink: 0, marginTop: "2px" }} />
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.6 }}>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{".grid-responsive { @media (max-width: 900px) { grid-template-columns: 1fr !important; } }"}</style>
    </section>
  );
};

export default About;
