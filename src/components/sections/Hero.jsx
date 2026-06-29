import { motion } from "framer-motion";
import { heroContent } from "../../data/content";
import Button from "../ui/Button";
import ScrollIndicator from "../ui/ScrollIndicator";

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const Hero = () => {
  return (
    <section
      id="hero"
      style={{ minHeight: "100svh", backgroundColor: "#090909", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
    >
      <motion.div
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url("${heroContent.backgroundImage}")`, backgroundSize: "cover", backgroundPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(9,9,9,0.6) 0%, rgba(9,9,9,0.45) 30%, rgba(9,9,9,0.75) 70%, rgba(9,9,9,1) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 20%, rgba(9,9,9,0.5) 100%)" }} />
      </motion.div>

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1100px", margin: "0 auto", padding: "0 24px", textAlign: "center", paddingTop: "80px" }}>
        <motion.p
          style={{ color: "#D4AF37", fontSize: "11px", letterSpacing: "0.4em", fontWeight: 600, marginBottom: "28px", textTransform: "uppercase" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Tatuador Internacional de Élite
        </motion.p>

        <motion.h1
          className="gradient-text text-shadow-lg"
          style={{ fontFamily: "\'Playfair Display\', Georgia, serif", fontSize: "clamp(56px, 11vw, 130px)", fontWeight: 900, lineHeight: 0.9, marginBottom: "32px", letterSpacing: "-0.02em" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {heroContent.artistName}
        </motion.h1>

        <motion.div
          style={{ width: "80px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.8), transparent)", margin: "0 auto 28px" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        />

        <motion.p
          className="text-shadow"
          style={{ fontSize: "clamp(16px, 2.5vw, 26px)", color: "rgba(255,255,255,0.88)", fontWeight: 300, letterSpacing: "0.06em", marginBottom: "16px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {heroContent.tagline}
        </motion.p>

        <motion.p
          style={{ fontSize: "clamp(13px, 1.4vw, 16px)", color: "rgba(255,255,255,0.5)", maxWidth: "500px", margin: "0 auto 52px", lineHeight: 1.75 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          {heroContent.description}
        </motion.p>

        <motion.div
          style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Button variant="primary" onClick={() => scrollTo("#contact")}>{heroContent.ctaPrimary}</Button>
          <Button variant="secondary" onClick={() => scrollTo("#gallery")}>{heroContent.ctaSecondary}</Button>
        </motion.div>

        <motion.div style={{ marginTop: "80px" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 2 }}>
          <ScrollIndicator />
        </motion.div>
      </div>

      <div style={{ position: "absolute", top: "20%", right: "8%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)", pointerEvents: "none", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "20%", left: "8%", width: "450px", height: "450px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,0,0,0.07) 0%, transparent 70%)", pointerEvents: "none", zIndex: 1 }} />
    </section>
  );
};

export default Hero;
