import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaTiktok, FaFacebookF } from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { SOCIAL_LINKS, CONTACT_INFO, NAV_ITEMS } from "../../utils/constants";

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const Footer = () => {
  const socials = [
    { Icon: FaInstagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
    { Icon: FaWhatsapp, href: SOCIAL_LINKS.whatsapp, label: "WhatsApp" },
    { Icon: FaTiktok, href: SOCIAL_LINKS.tiktok, label: "TikTok" },
    { Icon: FaFacebookF, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  ];

  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 32px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "48px", marginBottom: "60px" }}>
          <div>
            <h3 className="gradient-text" style={{ fontFamily: "\'Playfair Display\', Georgia, serif", fontSize: "26px", fontWeight: 800, marginBottom: "16px" }}>DANTE CRUZ</h3>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontSize: "14px", maxWidth: "240px" }}>
              Arte que trasciende la piel. Creando obras maestras permanentes desde 2012.
            </p>
          </div>

          <div>
            <h4 style={{ color: "white", fontSize: "13px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>Navegación</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {NAV_ITEMS.map((item) => (
                <a key={item.id} href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.target.style.color = "#D4AF37"}
                  onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.5)"}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: "white", fontSize: "13px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>Contacto</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[{ Icon: HiPhone, text: CONTACT_INFO.phone }, { Icon: HiMail, text: CONTACT_INFO.email }, { Icon: HiLocationMarker, text: CONTACT_INFO.address }].map(({ Icon, text }, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <Icon style={{ color: "#D4AF37", fontSize: "16px", marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: "white", fontSize: "13px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>Síguenos</h4>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {socials.map(({ Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "17px" }}
                  whileHover={{ scale: 1.1, background: "#D4AF37", color: "#090909" }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "32px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>© {new Date().getFullYear()} Dante Cruz. Todos los derechos reservados.</p>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px" }}>Diseñado con pasión para el arte corporal de élite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
