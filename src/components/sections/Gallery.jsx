import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import { galleryImages, categories } from "../../data/gallery";
import SectionTitle from "../ui/SectionTitle";

export const Gallery = () => {
  const [selected, setSelected] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const filtered = selected === "all" ? galleryImages : galleryImages.filter((i) => i.category === selected);

  const breakpoints = { default: 3, 1024: 2, 640: 1 };

  return (
    <section id="gallery" style={{ padding: "120px 0", backgroundColor: "#0d0d0d" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 32px" }}>
        <SectionTitle title="Galería" subtitle="Una selección de obras realizadas con dedicación y maestría" />

        {/* Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginBottom: "48px" }}>
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelected(cat.id)}
              style={{
                padding: "8px 22px",
                borderRadius: "100px",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                border: selected === cat.id ? "none" : "1px solid rgba(255,255,255,0.15)",
                background: selected === cat.id ? "linear-gradient(135deg, #D4AF37, #E5C158)" : "rgba(255,255,255,0.04)",
                color: selected === cat.id ? "#090909" : "rgba(255,255,255,0.65)",
                transition: "all 0.3s",
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Masonry */}
        <AnimatePresence mode="wait">
          <motion.div key={selected} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <Masonry breakpointCols={breakpoints} className="flex -ml-6 w-auto" columnClassName="pl-6 bg-clip-padding">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  style={{ marginBottom: "24px", borderRadius: "16px", overflow: "hidden", cursor: "pointer", position: "relative" }}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setLightbox(img)}
                  className="group"
                >
                  <img src={img.src} alt={img.title} style={{ width: "100%", height: "auto", display: "block" }} loading="lazy" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(9,9,9,0.9) 0%, transparent 50%)", opacity: 0, transition: "opacity 0.3s" }} className="group-overlay" />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px", transform: "translateY(10px)", opacity: 0, transition: "all 0.3s" }} className="group-content">
                    <h3 style={{ color: "white", fontSize: "16px", fontWeight: 600, marginBottom: "4px" }}>{img.title}</h3>
                    <span style={{ background: "rgba(212,175,55,0.2)", color: "#D4AF37", padding: "3px 10px", borderRadius: "100px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em" }}>{img.categoryLabel}</span>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            style={{ position: "fixed", inset: 0, background: "rgba(9,9,9,0.97)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox.src} alt={lightbox.title}
              style={{ maxWidth: "100%", maxHeight: "90vh", borderRadius: "16px", objectFit: "contain" }}
              initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightbox(null)}
              style={{ position: "absolute", top: "24px", right: "28px", background: "rgba(255,255,255,0.1)", border: "none", color: "white", width: "48px", height: "48px", borderRadius: "50%", fontSize: "22px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
            >×</button>
            <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>
              <p style={{ color: "white", fontSize: "16px", fontWeight: 600, marginBottom: "4px" }}>{lightbox.title}</p>
              <span style={{ color: "#D4AF37", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>{lightbox.categoryLabel}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{".group:hover .group-overlay { opacity: 1 !important; } .group:hover .group-content { opacity: 1 !important; transform: translateY(0) !important; }"}</style>
    </section>
  );
};

export default Gallery;
