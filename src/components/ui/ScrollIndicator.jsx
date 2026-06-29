import { motion } from "framer-motion";

export const ScrollIndicator = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", cursor: "pointer" }}
      onClick={() => { const el = document.getElementById("gallery"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
    >
      <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
      <div style={{ width: "24px", height: "40px", border: "1.5px solid rgba(255,255,255,0.25)", borderRadius: "12px", display: "flex", justifyContent: "center", paddingTop: "6px" }}>
        <motion.div
          style={{ width: "4px", height: "4px", backgroundColor: "#D4AF37", borderRadius: "50%" }}
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
