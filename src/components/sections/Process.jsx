import { motion } from "framer-motion";
import { HiChatAlt2, HiPencilAlt, HiCalendar, HiStar, HiHeart } from "react-icons/hi";
import SectionTitle from "../ui/SectionTitle";

const steps = [
  { n: "01", title: "Consulta", desc: "Conversamos sobre tu visión, ideas y expectativas. Analizamos referencias y definimos el concepto juntos.", Icon: HiChatAlt2 },
  { n: "02", title: "Diseño", desc: "Creo un diseño personalizado. Refinamos hasta lograr exactamente lo que imaginas.", Icon: HiPencilAlt },
  { n: "03", title: "Reserva", desc: "Agendamos la fecha ideal y recibes instrucciones de preparación para el gran día.", Icon: HiCalendar },
  { n: "04", title: "Tattoo Day", desc: "El gran día. Trabajamos en ambiente profesional y cómodo. Cada trazo con precisión.", Icon: HiStar },
  { n: "05", title: "Curación", desc: "Guía personalizada del proceso de cuidado post-tatuaje. Seguimiento hasta la cicatrización.", Icon: HiHeart },
];

export const Process = () => {
  return (
    <section id="process" style={{ padding: "120px 0", backgroundColor: "#090909" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px" }}>
        <SectionTitle title="Proceso" subtitle="De la idea a la obra maestra en 5 pasos" />

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: "50%", top: "20px", bottom: "20px", width: "1px", background: "linear-gradient(to bottom, transparent, rgba(212,175,55,0.25), transparent)", transform: "translateX(-50%)" }} className="hidden md:block" />

          {steps.map((step, i) => {
            const Icon = step.Icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.n}
                style={{ display: "flex", alignItems: "center", marginBottom: "40px", gap: "32px", flexDirection: isLeft ? "row" : "row-reverse" }}
                className="step-row"
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Card */}
                <div style={{ flex: 1 }}>
                  <motion.div
                    className="glass"
                    style={{ borderRadius: "16px", padding: "28px 32px" }}
                    whileHover={{ scale: 1.02, boxShadow: "0 16px 50px rgba(0,0,0,0.5)" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
                      <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon style={{ color: "#D4AF37", fontSize: "20px" }} />
                      </div>
                      <span style={{ fontFamily: "\'Playfair Display\', Georgia, serif", fontSize: "44px", fontWeight: 900, color: "rgba(212,175,55,0.12)", lineHeight: 1 }}>{step.n}</span>
                    </div>
                    <h3 style={{ fontFamily: "\'Playfair Display\', Georgia, serif", fontSize: "20px", fontWeight: 700, color: "white", marginBottom: "8px" }}>{step.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.7 }}>{step.desc}</p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#D4AF37", flexShrink: 0, boxShadow: "0 0 20px rgba(212,175,55,0.5)", zIndex: 1 }}
                  className="hidden md:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                />

                <div style={{ flex: 1 }} className="hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{".step-row { @media (max-width: 768px) { flex-direction: column !important; gap: 16px !important; } } .hidden.md\\:block { display: none; } @media (min-width: 768px) { .hidden.md\\:block { display: block !important; } }"}</style>
    </section>
  );
};

export default Process;
