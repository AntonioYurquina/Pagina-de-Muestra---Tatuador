import { motion } from "framer-motion";

export const SectionTitle = ({ title, subtitle, align = "center", className = "" }) => {
  const isCenter = align === "center";

  return (
    <motion.div
      style={{ display: "flex", flexDirection: "column", alignItems: isCenter ? "center" : "flex-start", textAlign: isCenter ? "center" : "left", marginBottom: "64px" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2
        className="gradient-text"
        style={{ fontFamily: "\'Playfair Display\', Georgia, serif", fontSize: "clamp(34px, 5vw, 60px)", fontWeight: 800, lineHeight: 1.1, marginBottom: subtitle ? "16px" : "20px", letterSpacing: "-0.01em" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: "clamp(14px, 1.5vw, 17px)", color: "rgba(255,255,255,0.55)", maxWidth: "520px", lineHeight: 1.7, marginBottom: "20px" }}>
          {subtitle}
        </p>
      )}
      <div className="gold-line" />
    </motion.div>
  );
};

export default SectionTitle;
