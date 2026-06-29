import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { NAV_ITEMS } from "../../utils/constants";
import Button from "../ui/Button";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollPosition } = useScrollPosition();
  const isScrolled = scrollPosition > 60;

  const navStyle = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    padding: isScrolled ? "14px 0" : "24px 0",
    transition: "all 0.4s ease",
    background: isScrolled ? "rgba(9,9,9,0.92)" : "transparent",
    backdropFilter: isScrolled ? "blur(20px)" : "none",
    borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
  };

  return (
    <>
      <motion.nav style={navStyle} initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
            className="gradient-text"
            style={{ fontFamily: "\'Playfair Display\', Georgia, serif", fontSize: "22px", fontWeight: 800, textDecoration: "none", letterSpacing: "0.05em" }}
            whileHover={{ scale: 1.04 }}
          >
            DANTE CRUZ
          </motion.a>

          <div style={{ display: "flex", alignItems: "center", gap: "36px" }} className="hidden lg:flex">
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", letterSpacing: "0.08em", textDecoration: "none", textTransform: "uppercase", fontWeight: 500 }}
                whileHover={{ color: "#D4AF37" }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
            <Button variant="primary" onClick={() => scrollTo("#contact")}>Reservar</Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ display: "none", background: "none", border: "none", color: "white", fontSize: "26px", cursor: "pointer" }}
            className="lg:hidden block"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={{ position: "fixed", inset: 0, background: "rgba(9,9,9,0.97)", zIndex: 99, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "40px" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
          >
            <button onClick={() => setIsOpen(false)} style={{ position: "absolute", top: "24px", right: "24px", background: "none", border: "none", color: "white", fontSize: "32px", cursor: "pointer" }}>
              <HiX />
            </button>
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.id} href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); setIsOpen(false); }}
                style={{ fontFamily: "\'Playfair Display\', Georgia, serif", fontSize: "36px", fontWeight: 700, color: "white", textDecoration: "none" }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                whileHover={{ color: "#D4AF37" }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: NAV_ITEMS.length * 0.07 }}>
              <Button variant="primary" onClick={() => { scrollTo("#contact"); setIsOpen(false); }}>Reservar Turno</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
