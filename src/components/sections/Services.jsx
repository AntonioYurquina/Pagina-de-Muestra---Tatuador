import { motion } from "framer-motion";
import { services } from "../../data/services";
import SectionTitle from "../ui/SectionTitle";

export const Services = () => {
  return (
    <section id="services" style={{ padding: "120px 0", backgroundColor: "#090909" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        <SectionTitle title="Especialidades" subtitle="Dominio técnico en múltiples disciplinas del arte corporal" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="services-grid">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="glass"
                style={{ borderRadius: "18px", padding: "36px 28px", cursor: "default", position: "relative", overflow: "hidden" }}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ scale: 1.03, boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.15)", background: "rgba(255,255,255,0.06)" }}
              >
                {/* Gold corner accent */}
                <div style={{ position: "absolute", top: 0, right: 0, width: "80px", height: "80px", background: "radial-gradient(circle at top right, rgba(212,175,55,0.08), transparent 70%)" }} />

                {/* Icon */}
                <motion.div
                  style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Icon style={{ color: "#D4AF37", fontSize: "26px" }} />
                </motion.div>

                <h3 style={{ fontFamily: "\'Playfair Display\', Georgia, serif", fontSize: "22px", fontWeight: 700, color: "white", marginBottom: "12px" }}>{service.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.75 }}>{service.description}</p>

                <motion.div
                  style={{ width: "32px", height: "2px", background: "#D4AF37", borderRadius: "1px", marginTop: "20px", opacity: 0.7 }}
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 + 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{".services-grid { @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr) !important; } @media (max-width: 600px) { grid-template-columns: 1fr !important; } }"}</style>
    </section>
  );
};

export default Services;
