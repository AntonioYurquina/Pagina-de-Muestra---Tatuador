import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../../data/faq";
import SectionTitle from "../ui/SectionTitle";
import { HiPlus, HiMinus } from "react-icons/hi";

export const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section style={{ padding: "120px 0", backgroundColor: "#090909" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px" }}>
        <SectionTitle title="Preguntas Frecuentes" subtitle="Todo lo que necesitas saber antes de tu primera cita" />

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqData.map((item, i) => (
            <motion.div
              key={item.id}
              className="glass"
              style={{ borderRadius: "14px", overflow: "hidden" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "16px" }}
              >
                <span style={{ color: open === i ? "white" : "rgba(255,255,255,0.8)", fontSize: "16px", fontWeight: open === i ? 600 : 400, transition: "all 0.3s", lineHeight: 1.4 }}>{item.question}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ flexShrink: 0 }}>
                  {open === i ? <HiMinus style={{ color: "#D4AF37", fontSize: "20px" }} /> : <HiPlus style={{ color: "#D4AF37", fontSize: "20px" }} />}
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ overflow: "hidden" }}
                  >
                    <p style={{ padding: "0 24px 24px", color: "rgba(255,255,255,0.6)", fontSize: "15px", lineHeight: 1.8, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "16px", marginTop: "0" }}>
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
