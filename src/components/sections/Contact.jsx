import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle } from "react-icons/hi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { contactContent } from "../../data/content";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../utils/constants";
import { validateForm } from "../../utils/validation";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

const Field = ({ label, error, required, children }) => (
  <div>
    <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em", marginBottom: "8px" }}>
      {label}{required && <span style={{ color: "#D4AF37", marginLeft: "4px" }}>*</span>}
    </label>
    {children}
    {error && <p style={{ color: "rgba(239,68,68,0.9)", fontSize: "12px", marginTop: "6px" }}>{error}</p>}
  </div>
);

export const Contact = () => {
  const [form, setForm] = useState({ nombre: "", instagram: "", email: "", telefono: "", idea: "", tamano: "", zona: "", mensaje: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const submit = (e) => {
    e.preventDefault();
    const v = validateForm(form);
    if (!v.isValid) { setErrors(v.errors); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ nombre: "", instagram: "", email: "", telefono: "", idea: "", tamano: "", zona: "", mensaje: "" });
      setTimeout(() => setSuccess(false), 6000);
    }, 1500);
  };

  const inputStyle = (field) => ({
    width: "100%", padding: "14px 18px", background: "rgba(255,255,255,0.04)", border: `1px solid ${errors[field] ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.1)"}`,
    borderRadius: "10px", color: "white", fontSize: "15px", fontFamily: "\'Inter\', sans-serif", outline: "none", transition: "border-color 0.3s, box-shadow 0.3s",
  });

  const contacts = [
    { Icon: HiPhone, label: "Teléfono", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
    { Icon: HiMail, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
    { Icon: HiLocationMarker, label: "Ubicación", value: CONTACT_INFO.address, href: null },
  ];

  return (
    <section id="contact" style={{ padding: "120px 0", backgroundColor: "#0d0d0d" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        <SectionTitle title={contactContent.title} subtitle={contactContent.subtitle} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px" }} className="contact-grid">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-strong" style={{ borderRadius: "20px", padding: "36px", height: "100%" }}>
              <h3 style={{ fontFamily: "\'Playfair Display\', Georgia, serif", fontSize: "22px", fontWeight: 700, color: "white", marginBottom: "28px" }}>Información de Contacto</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "22px", marginBottom: "32px" }}>
                {contacts.map(({ Icon, label, value, href }) => (
                  <div key={label} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ color: "#D4AF37", fontSize: "17px" }} />
                    </div>
                    <div>
                      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>{label}</p>
                      {href ? (
                        <a href={href} style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", textDecoration: "none" }} onMouseEnter={(e) => e.target.style.color = "#D4AF37"} onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.8)"}>{value}</a>
                      ) : (
                        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", lineHeight: 1.5 }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px" }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "14px" }}>Redes Sociales</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  {[{ Icon: FaInstagram, href: SOCIAL_LINKS.instagram }, { Icon: FaWhatsapp, href: SOCIAL_LINKS.whatsapp }].map(({ Icon, href }, i) => (
                    <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer"
                      style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "17px" }}
                      whileHover={{ background: "#D4AF37", color: "#090909", scale: 1.1 }}
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form onSubmit={submit} className="glass-strong" style={{ borderRadius: "20px", padding: "40px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }} className="form-grid">
                <Field label="Nombre Completo" error={errors.nombre} required>
                  <input name="nombre" value={form.nombre} onChange={handle} style={inputStyle("nombre")} onFocus={(e) => { e.target.style.borderColor = "rgba(212,175,55,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(212,175,55,0.08)"; }} onBlur={(e) => { e.target.style.borderColor = errors.nombre ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }} />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input name="email" type="email" value={form.email} onChange={handle} style={inputStyle("email")} onFocus={(e) => { e.target.style.borderColor = "rgba(212,175,55,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(212,175,55,0.08)"; }} onBlur={(e) => { e.target.style.borderColor = errors.email ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }} />
                </Field>
                <Field label="Instagram" error={errors.instagram}>
                  <input name="instagram" value={form.instagram} onChange={handle} placeholder="@usuario" style={inputStyle("instagram")} onFocus={(e) => { e.target.style.borderColor = "rgba(212,175,55,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(212,175,55,0.08)"; }} onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }} />
                </Field>
                <Field label="Teléfono" error={errors.telefono}>
                  <input name="telefono" value={form.telefono} onChange={handle} style={inputStyle("telefono")} onFocus={(e) => { e.target.style.borderColor = "rgba(212,175,55,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(212,175,55,0.08)"; }} onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }} />
                </Field>
                <Field label="Tamaño Aproximado">
                  <select name="tamano" value={form.tamano} onChange={handle} style={inputStyle("tamano")}>
                    <option value="" style={{ background: "#111" }}>Seleccionar</option>
                    <option value="pequeño" style={{ background: "#111" }}>Pequeño — menos de 5cm</option>
                    <option value="mediano" style={{ background: "#111" }}>Mediano — 5 a 15cm</option>
                    <option value="grande" style={{ background: "#111" }}>Grande — 15 a 30cm</option>
                    <option value="muy-grande" style={{ background: "#111" }}>Muy Grande — más de 30cm</option>
                  </select>
                </Field>
                <Field label="Zona del Cuerpo">
                  <input name="zona" value={form.zona} onChange={handle} placeholder="Ej: brazo, espalda, pierna..." style={inputStyle("zona")} onFocus={(e) => { e.target.style.borderColor = "rgba(212,175,55,0.6)"; }} onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }} />
                </Field>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <Field label="Describe tu Idea">
                  <textarea name="idea" value={form.idea} onChange={handle} rows={3} style={{ ...inputStyle("idea"), resize: "none" }} onFocus={(e) => { e.target.style.borderColor = "rgba(212,175,55,0.6)"; }} onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }} />
                </Field>
              </div>

              <div style={{ marginBottom: "28px" }}>
                <Field label="Mensaje" error={errors.mensaje} required>
                  <textarea name="mensaje" value={form.mensaje} onChange={handle} rows={4} style={{ ...inputStyle("mensaje"), resize: "none" }} onFocus={(e) => { e.target.style.borderColor = "rgba(212,175,55,0.6)"; }} onBlur={(e) => { e.target.style.borderColor = errors.mensaje ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.1)"; }} />
                </Field>
              </div>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ display: "flex", gap: "10px", alignItems: "center", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "10px", padding: "14px 18px", marginBottom: "20px" }}
                >
                  <HiCheckCircle style={{ color: "#22c55e", fontSize: "20px", flexShrink: 0 }} />
                  <p style={{ color: "#22c55e", fontSize: "14px" }}>{contactContent.successMessage}</p>
                </motion.div>
              )}

              <Button type="submit" variant="primary" disabled={loading} style={{ width: "100%" }}>
                {loading ? "Enviando..." : contactContent.submitButton}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
      <style>{".contact-grid { @media (max-width: 900px) { grid-template-columns: 1fr !important; } } .form-grid { @media (max-width: 600px) { grid-template-columns: 1fr !important; } }"}</style>
    </section>
  );
};

export default Contact;
